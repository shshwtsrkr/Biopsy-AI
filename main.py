import tkinter as tk
from tkinter import ttk
import customtkinter as ctk
import os
from PIL import ImageTk, Image
import os
import cv2
from PIL import Image
import numpy as np
from keras.models import load_model
from tkinter import filedialog
import matplotlib.pyplot as plt
from keras.preprocessing import image
import numpy as np
import tensorflow as tf
from tkinter import messagebox
global options
model1 = load_model("br35kunal.h5")
model2 = load_model("efficientnetb3-leukemia-91.50.h5")
model3 = load_model("breast_cancer.h5")

def prepare_image(file):
    img = image.load_img(file, target_size=(224, 224))
    img_array = image.img_to_array(img)
    return tf.keras.applications.efficientnet.preprocess_input (img_array)

def predict_image():
    if combobox.get() == options[0]:
        ResultMap = {0: 'You might not have any brain tumour', 1: 'You might have a brain tumour'}
        file_path = filedialog.askopenfilename()
        test_image = Image.open(file_path)
        test_image = test_image.resize((200, 200))
        test_image = np.array(test_image)
        test_image = np.expand_dims(test_image, axis=0)
        result = model1.predict(test_image, verbose=0)
        prediction = ResultMap[np.argmax(result)]
        fig, ax = plt.subplots()
        ax.imshow(test_image[0].astype(np.uint8))
        ax.set_title(f"{prediction}")
        plt.show()
    elif combobox.get() == options[1]:
        ResultMap = {0: 'You might have Acute Lymphoblastic Leukemia', 1: 'You might be Normal'}
        file_path = filedialog.askopenfilename()
        img = cv2.imread(file_path)
        img = Image.fromarray(img, 'RGB')
        img = img.resize((224, 224))
        img = np.array(img)
        img = np.expand_dims(img, axis=0)
        result = model2.predict(img, verbose=0)
        prediction = ResultMap[np.argmax(result)]
        fig, ax = plt.subplots()
        ax.imshow(img[0].astype(np.uint8))
        ax.set_title(f"{prediction}")
        plt.show()
    elif combobox.get() == options[2]:
        classes = ['You might have Benign cancer', 'You might have Malignant cancer', 'You might be Normal']
        file_path = filedialog.askopenfilename()
        test_image = Image.open(file_path)
        test_image = test_image.resize((224, 224))
        test_image = np.array(test_image)
        dis_image = test_image
        #test_image = np.expand_dims(test_image, axis=0)
        res = model3.predict(np.expand_dims(test_image, axis=0))
        pred = classes[np.argmax(res)]
        fig, ax = plt.subplots()
        ax.imshow(dis_image.astype(np.uint8))
        ax.set_title(f"{pred}")
        plt.show()
    else:
        messagebox.showwarning("Warning", "Please select a type of cancer first")

BG_COLOR = '#333'
FG_COLOR = '#fff'
BTN_BG_COLOR = '#555'
BTN_ACTIVE_BG_COLOR = '#999'

root = tk.Tk()
root.title('BiopsyAI')
p1 = tk.PhotoImage(file = 'icon.png')
root.iconphoto(False, p1)
root.geometry('700x400')
root.configure(bg=BG_COLOR)

style = ttk.Style(root)
style.theme_use('clam')
style.configure('TLabel', background=BG_COLOR, foreground=FG_COLOR, font=('Arial', 14))
style.configure('TFrame', background=BG_COLOR)
style.configure('TButton', background=BTN_BG_COLOR, foreground=FG_COLOR, font=('Arial', 14))
style.map('TButton', background=[('active', BTN_ACTIVE_BG_COLOR)])

title_frame = ttk.Frame(root, padding=10)
title_frame.pack(fill='x')
img = Image.open("logo.png")
img = img.resize((500, 170))
img = ImageTk.PhotoImage(img)
title_label = ttk.Label(title_frame, image=img, compound='left', style='TLabel')
title_label.pack(expand=True)

dropdown_frame = ttk.Frame(root, padding=10)
dropdown_frame.pack(fill='x')
dropdown_label = ttk.Label(dropdown_frame, text='Choose the type of cancer:', style='TLabel')
dropdown_label.pack(side='left')
options = ['Brain Tumour', 'Leukemia', 'Breast Cancer']
combobox = ctk.CTkComboBox(master=dropdown_frame,
                                     values=options,
                                     width=300)
combobox.pack(side='left', pady=30)
combobox.set("Select a type of Cancer")
combobox.configure(ttk.Combobox, width=300)

predict_button = ctk.CTkButton(dropdown_frame, text="Upload Image", font=("Helvetica", 14), command=lambda:predict_image())
predict_button.pack(side=tk.RIGHT,padx=10)

root.mainloop()
