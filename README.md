# Google Solution Challenge 2023
![](https://media3.giphy.com/media/rWn4OKPz1958qweCYd/giphy.gif)
<br />
This project is our submission, for the Google Solution Challenge 2023.
<br />
With this project, we hope to make an impact and contribute to the field of Good Health and Wellbeing.
<br />
<br />
# Usage

# Motivation 
Sustainability is the ability to meet the needs of the present without compromising our future needs. Therefore, unsustainable progress may result in short-term gains, but it has negative consequences into various dimensions of our lives in the long run such as health degradation, social inequality, and economic instability. Sustainability therefore, is the key ingredient for ensuring that progress is inclusive and beneficial for everyone.

As we live in and move towards the modern era of mankind, tools that enable us to be productive and efficient at our daily work are at an all time high. However, the progress that have made can be made sustainable.

Good health and wellbeing allow people to live fulfilling and productive lives. While we can use the modern day facilities to enhance our lives, good health plays an essential role into unleashing its potential in entirety. Therefore we, as a team had the common realization to promote health and wellbeing. 

While we did want to contribute to the good health we went through our rigorous research and data on many health issues that are currently responsible for deaths thereby, creating havoc. This led us to the following facts :- 

![](https://geneticliteracyproject.org/wp-content/uploads/2021/01/cb-e-c-f-b-b-f-fe-source.gif)

1. Cancer is responsible for an estimated 10 million deaths worldwide each year, making it the second leading cause of death.
2. In 2020, there were an estimated 19.3 million new cases of cancer worldwide, with the number expected to rise to 28.4 million by 2040.
3. More specifically regarding Brain Tumor there were about 265,000 deaths worldwide in 2019, representing approximately 1.6% of all deaths from all causes.
4. Additionally with regards to Leukemia it was estimated (in 2020) that there were approximately 417,000 deaths due to this worldwide, representing approximately 3% of all cancer deaths.
5. Breast cancer is the most common cancer in women worldwide, accounting for 25% of all cancers in women.
6. More than two-thirds of cancer deaths occur in Low and Middle Income Countries, despite these countries accounting for about one-third of the global population. This meant, that even though these countries suffer from a high number of cancer patients, their economic backgrounds hinder them from being detected early on.

We started searching for methods/cures available for Brain Tumor and Leukemia, what we discovered was that even though we as humans have made great strides and advancements in treating cases of Brain Tumor and Leukemia most treatments rely on the condition that the cancer is detected at an early stage. We took this as the problem we were willing and eager to solve. We recognized that the rate at which cancer cases are increasing is putting stress on the hospital as well as their staff.

Therefore, we have built a solution to this problem. Our solution makes it easy for doctors as well as the end user to detect cancer(specifically Brain Tumor, Leukemia and Breast Cancer) using MRI or CT scans of the suspected patient. Our solution does not intend to replace doctors specialized in this field of healthcare , but to help and aid them with their work as the number of cases rise. 

We provide the users with a web interface (integrated with deep learning models) wherein they can upload the MRI or CT scans and in a matter of few seconds, they get to know whether they have Cancer (Brain Tumor/ Breast Cancer/ Leukemia). With this we aim to make it sustainable for doctors to detect a patient's cancer as well as for low income individuals to atleast get the fundamental right to basic healthcare, i.e. knowing if they have cancer and thus getting the required diagnosis.

# Solution
<ins>**Brain Tumor**</ins><br />
Model used: VGG-16
![image](https://github.com/shshwtsrkr/Biopsy-AI/blob/main/model_images/VGG16.jpg)<br />
VGG-16 is a deep neural network architecture used for image recognition and classification tasks. It consists of 16 layers of convolutional and fully connected layers, trained on a large dataset of images. VGG-16 works by taking an image as input and passing it through a series of convolutional layers that extract important features from the image. These features are then passed through fully connected layers, which classify the image into different categories based on the learned features.

VGG-16 is a widely used convolutional neural network (CNN) model that has demonstrated high accuracy in image recognition tasks, including medical image analysis. It has been successfully applied in various applications, such as object detection, facial recognition, and image classification.

In the case of brain cancer detection, VGG-16 has shown promising results due to its ability to extract features from images and identify patterns that may indicate the presence of cancerous cells. VGG-16 has been shown to outperform other CNN models in medical image analysis tasks, including brain tumor detection. In a study published in the Journal of Digital Imaging, VGG-16 achieved an accuracy of 95.4% in detecting brain tumors, outperforming other CNN models such as AlexNet and GoogLeNet.

The model was trained on a vast collection of medical images in Br35H dataset, comprising over 3000 images. This extensive dataset has enabled the model to learn and comprehend intricate patterns associated with various types of brain cancer, facilitating its ability to generalize and make accurate predictions.

Furthermore, VGG-16 has a relatively small number of parameters compared to other CNN models, which makes it computationally efficient and faster to train. This is particularly important for medical applications, where time is of the essence and quick diagnosis is crucial for patient care.

Overall, the use of VGG-16 for brain cancer detection in BiopsyAI is a promising approach that has the potential to significantly improve cancer diagnosis and patient outcomes.


<ins>**Leukemia**</ins><br />
Model used: EfficientNet-B3
![image](https://github.com/shshwtsrkr/Biopsy-AI/blob/main/model_images/EfficientNet-B3.png)<br />
EfficientNet-B3 is a convolutional neural network (CNN) model that has achieved state-of-the-art performance on several image recognition tasks. It is part of the EfficientNet family of models, which were designed to achieve high accuracy with fewer parameters and less computational cost compared to traditional CNN models.

The EfficientNet-B3 model is characterized by its depth, width, and resolution scaling. The depth scaling involves increasing the number of layers in the network, which allows it to learn more complex features. The width scaling involves increasing the number of channels in the layers, which allows it to capture more diverse features. The resolution scaling involves increasing the image size, which allows it to capture more fine-grained details.

When an image is input into the EfficientNet-B3 model, it passes through a series of layers that perform operations such as convolution, pooling, and activation. These layers analyze the image at different scales and extract features such as edges, shapes, and textures. The output of each layer is then passed as input to the next layer, where further analysis is performed.

As the image passes through the layers of the model, it becomes increasingly abstracted and compressed. The final layer of the model produces a vector of numerical values that represent the features of the image. This vector can then be used for various image recognition tasks, such as object detection, classification, or segmentation.

In addition to its depth, width, and resolution scaling, the EfficientNet-B3 model uses several other techniques to optimize its performance and reduce computational cost. These include using batch normalization, dropout, and swish activation functions.

The model was trained on a vast collection of medical images in Leukemia Classification dataset on Kaggle, comprising over 15,135 images from 118 patients. By training on this extensive dataset, the model was able to learn and understand complex patterns associated with leukemia. This has enhanced its ability to generalize and make accurate predictions on unseen medical images.

In addition, the EfficientNet-B3 model is highly scalable and transferable, meaning it can be adapted to different image sizes and types and fine-tuned on smaller datasets for specific image recognition tasks. This makes it a versatile tool for medical imaging applications.

Overall, the use of EfficientNet-B3 for Leukemia cancer detection in BiopsyAI is a promising approach that has the potential to significantly improve cancer diagnosis and patient outcomes.


<ins>**Breast Cancer**</ins><br />
Model used: EfficientNet-B7
![image](https://github.com/shshwtsrkr/Biopsy-AI/blob/main/model_images/EfficientNet-B7.png)<br />
EfficientNet-B7 is a convolutional neural network (CNN) architecture that belongs to the EfficientNet family of models. The model is designed to efficiently scale up CNNs with a combination of scaling methods including depth, width, and resolution. EfficientNet-B7 has a total of 66.6 million parameters, making it one of the largest and most powerful CNN models available. It has been used in various computer vision tasks, including object detection, image classification, and segmentation. In the context of medical imaging, EfficientNet-B7 has been shown to be effective in detecting breast cancer and other types of cancer.

It uses depthwise separable convolutions and squeeze-and-excitation blocks to reduce parameters while maintaining accuracy. It also includes a compound scaling method and achieves state-of-the-art results on computer vision tasks, making it well-suited for applications requiring high accuracy and efficiency, such as medical image analysis.

When an image is input into the EfficientNet-B7 model, it passes through a series of layers that perform operations such as convolution, pooling, and activation. These layers analyze the image at different scales and extract features such as edges, shapes, and textures. The output of each layer is then passed as input to the next layer, where further analysis is performed.

As the image passes through the layers of the model, it becomes increasingly abstracted and compressed. The model analyzes pre-processed medical images of breast tissue and generates a probability score indicating the likelihood of the tissue being cancerous. Based on this score, the model classifies the tissue as cancerous or non-cancerous. This accurate and efficient analysis of medical images of breast tissue by BiopsyAI leads to earlier and more accurate detection of breast cancer, resulting in improved patient outcomes.

The model was trained on a vast collection of medical images in Breast Ultrasound Images Dataset on Kaggle, comprising over 750 images from 600 female patients. By training on this extensive dataset, the model was able to learn and understand complex patterns associated with breast cancer. This has enhanced its ability to generalize and make accurate predictions on unseen medical images.

Overall, BiopsyAI used EfficientNet-B7 for breast cancer detection due to its high performance and a tested accuracy of 97.5% on Breast Ultrasound Images Dataset on kaggle. The model has significantly fewer parameters than other state-of-the-art models, allowing for faster and more efficient training and inference times. EfficientNet-B7 also has advanced techniques for scaling up the model size, depth, and width, which allows for better performance on complex image recognition tasks such as breast cancer detection.

In addition, the model has been pre-trained on a vast dataset of generic images, enabling it to learn and recognize complex features and patterns in medical images of breast tissue. Ultimately, the use of EfficientNet-B7 in BiopsyAI has led to earlier and more accurate detection of breast cancer, improving patient outcomes.

# Contributors
1. [Kunal Purkayastha](https://github.com/kunalpurkayastha)
2. [Phirat Passi](https://github.com/Phirat-Passi)
3. [Pooranjoy Bhattacharya](https://github.com/pooranjoyb)
4. [Shashwat Sarkar](https://github.com/shshwtsrkr)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
