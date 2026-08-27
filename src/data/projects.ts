export interface Project {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  image: string;
  category: string;
}

export const projects: Project[] = [
  // LLM Systems
  {
    title: "LLM Experiment Lab",
    description: "Production‑grade platform for benchmarking LLM configurations across models, prompts, providers, cost, latency, and quality, using deterministic evaluators and LLM judges to run parallel experiments, score outputs, analyze failures, and recommend the best configuration under explicit constraints.",
    tags: [
    "LLM Benchmarking",
    "GenAI APIs",
    "LLM Judge",
    "LangGraph",
    "FastAPI",
    "PostgreSQL",
    "Docker"
    ],
    repo: "https://github.com/ClementCI/llm-experiment-lab",
    image: "/images/dim_red.png",
    category: "LLM Systems"
  },

  // Dimensionality Reduction
  {
    title: "Dimensionality Reduction for Political Voting Data",
    description: "Analysis of European Parliament voting behavior using MDS and custom similarity metrics. 2D projection, temporal comparison with Procrustes alignment, and visualization of political blocs and their evolution.",
    tags: [
    "Dimensionality Reduction",
    "MDS",
    "Similarity Metrics",
    "Temporal Analysis",
    "Procrustes",
    "Data Visualization"
    ],
    repo: "https://github.com/ClementCI/political-voting",
    image: "/images/dim_red.png",
    category: "Dimensionality Reduction"
  },

  // Fundamental Deep Learning 
  {
    title: "Multi-Layer Perceptrons for Classification and Function Approximation",
    description: "Supervised learning with custom MLPs for classification and function approximation. Experiments explore hidden layer size, training modes, regularization, and learning dynamics, with visualizations of decision boundaries and function fitting.",
    tags: [
    "MLP",
    "Supervised Learning",
    "Classification",
    "Function Approximation",
    "Backpropagation",
    "Regularization",
    "Numpy"
    ],
    repo: "https://github.com/ClementCI/custom-mlp-models",
    image: "/images/2_layer_mlp.png",
    category: "Fundamental Deep Learning"
  },

  {
    title: "Deep Belief Networks (DBNs) with Restricted Boltzmann Machines",
    description: "Unsupervised feature learning with stacked RBMs trained via Contrastive Divergence to build a Deep Belief Network. Experiments on MNIST evaluate reconstruction, learned representations, classification performance, and generative sampling.",
    tags: [
    "DBN",
    "RBM",
    "Unsupervised Learning",
    "Generative Models",
    "Contrastive Divergence",
    "Feature Learning",
    "MNIST",
    "Numpy"
    ],
    repo: "https://github.com/ClementCI/custom-dbn-rbm",
    image: "/images/deep_belief_net.png",
    category: "Fundamental Deep Learning"
  }, 
  
  {
    title: "Hopfield Networks for Associative Memory",
    description: "Associative memory with Hopfield networks using Hebbian learning. Experiments evaluate pattern recall under noise, convergence dynamics, energy descent, memory capacity, and the effects of sparsity and correlation.",
    tags: [
    "Hopfield Networks",
    "Associative Memory",
    "Hebbian Learning",
    "Pattern Completion",
    "Unsupervised Learning",
    "Numpy"
    ],
    repo: "https://github.com/ClementCI/custom-hopfield-networks",
    image: "/images/hopfield_net.png",
    category: "Fundamental Deep Learning"
  },
  
  {
    title: "Image Classification with a Convolutional Neural Network",
    description: "Custom NumPy CNN for CIFAR‑10 classification, implementing convolution, pooling, backpropagation, cyclical learning rates, label smoothing, and offline data augmentation. Experiments compare architectures, training dynamics, and gradient correctness against PyTorch.",
    tags: [
    "CNN",
    "Image Classification",
    "NumPy",
    "Backpropagation",
    "CIFAR-10",
    "Data Augmentation",
    "Label Smoothing",
    "Cyclical Learning Rates"
    ],
    repo: "https://github.com/ClementCI/custom-cnn-classifier",
    image: "/images/cnn.png",
    category: "Fundamental Deep Learning"
  }, 

  {
    title: "Image Classification with a 1-Layer Neural Network",
    description: "Single‑layer fully connected classifier for CIFAR‑10 with analytical gradient checks, experiments on learning rate and regularization, comparison of Softmax+CE vs Sigmoid+MBCE losses, and evaluation of training dynamics and generalization.",
    tags: [
    "Neural Networks",
    "Image Classification",
    "CIFAR-10",
    "Backpropagation",
    "Regularization",
    "Loss Functions",
    "Numpy"
    ],
    repo: "https://github.com/ClementCI/custom-1layer-classifier",
    image: "/images/1_layer_mlp.png",
    category: "Fundamental Deep Learning"
  },

  {
    title: "Image Classification with a 2-Layer Neural Network",
    description: "Two‑layer fully connected network for CIFAR‑10 with analytical gradient checks, experiments on L2 regularization, cyclical learning rates, Adam optimization, dropout, and data augmentation. Focus on training dynamics, generalization, and hyperparameter sensitivity.",
    tags: [
    "Neural Networks",
    "Classification",
    "CIFAR-10",
    "Backpropagation",
    "Regularization",
    "Dropout",
    "Adam",
    "Cyclical Learning Rates",
    "Numpy"
    ],
    repo: "https://github.com/ClementCI/custom-2layer-classifier",
    image: "/images/2_layer_mlp.png",
    category: "Fundamental Deep Learning"
  }, 

  {
    title: "Character-Level Language Modeling with a Recurrent Neural Network",
    description: "Character‑level RNN built from scratch in NumPy for next‑character prediction and text generation. Includes manual forward/backward passes, analytical gradient checks, Adam training, sequence randomization strategies, and sampling with temperature and nucleus methods.",
    tags: [
    "RNN",
    "NLP",
    "Language Modeling",
    "Text Generation",
    "Sampling",
    "Numpy"
    ],
    repo: "https://github.com/ClementCI/custom-char-rnn",
    image: "/images/rlm.png",
    category: "Fundamental Deep Learning"
  }, 

  // Fundamental Machine Learning
  {
    title: "Bayesian Classification and Boosting",
    description: "Naive Bayes and decision tree classifiers evaluated on multiple datasets, with boosting (AdaBoost) used to improve performance and reduce bias. Includes PCA visualization and comparisons across Iris, Vowel, and Olivetti Faces.",
    tags: [
    "Naive Bayes",
    "Boosting",
    "AdaBoost",
    "Decision Trees",
    "Classification",
    "PCA",
    "Supervised Learning",
    "Scikit-learn"
    ],
    repo: "https://github.com/ClementCI/bayes-trees-boosting",
    image: "/images/cnn.png",
    category: "Fundamental Machine Learning"
  }, 

  {
    title: "Supervised Classification Challenge",
    description: "End‑to‑end supervised classification pipeline with preprocessing, PCA, model benchmarking, and hyperparameter tuning. Multiple classifiers were evaluated, with a 2‑layer neural network achieving the best validation accuracy for final challenge submission.",
    tags: [
    "Supervised Learning",
    "Classification",
    "PCA",
    "Data Preprocessing",
    "Model Benchmarking",
    "Neural Networks",
    "Ensemble Methods",
    "Scikit-learn",
    "XGBoost",
    "TensorFlow"
    ],
    repo: "https://github.com/ClementCI/classification-challenge",
    image: "/images/text_classification.png",
    category: "Fundamental Machine Learning"
  }, 

  {
    title: "Decision Tree Learning on the MONK Datasets",
    description: "Decision tree learning from scratch on the MONK datasets, using entropy and information gain. Includes pruning to reduce overfitting and analysis of how tree complexity affects generalization across MONK‑1, MONK‑2, and MONK‑3.",
    tags: [
    "Decision Trees",
    "Entropy",
    "Pruning",
    "Supervised Learning",
    "MONK Datasets"
    ],
    repo: "https://github.com/ClementCI/decision-trees-monk",
    image: "/images/decision_tree.png",
    category: "Fundamental Machine Learning"
  }, 

  {
    title: "Support Vector Machine Classifier",
    description: "Binary SVM classifier implemented from scratch using the dual formulation with linear, polynomial, and RBF kernels. Includes margin control, visualization of decision boundaries, and exploration of overfitting/underfitting through kernel and parameter tuning.",
    tags: [
    "SVM",
    "Classification",
    "RBF Kernel",
    "Polynomial Kernel",
    "Machine Learning",
    "Numpy"
    ],
    repo: "https://github.com/ClementCI/svm-classifier",
    image: "/images/svm.png",
    category: "Fundamental Machine Learning"
  },

  // Natural Language Preprocessing
  {
    title: "Embedded Topic Model for Document Analysis",
    description: "Embedded Topic Model implemented in PyTorch using variational inference and shared word–topic embeddings. Trained on 20 Newsgroups and compared to LDA using coherence, diversity, and perplexity, highlighting ETM’s interpretability and sensitivity to training stability.",
    tags: [
    "Topic Modeling",
    "ETM",
    "VAE",
    "Embeddings",
    "Document Analysis",
    "LDA",
    "PyTorch",
    "NLP"
    ],
    repo: "https://github.com/ClementCI/embedded-topic-model",
    image: "/images/topic_modeling.png",
    category: "Natural Language Processing"
  },

  {
    title: "Poetry Generator: Comparative Analysis of Neural Architectures",
    description: "Poetry generation system comparing custom RNN, LSTM, GPT, and GPT‑2 across multiple tokenizers, with GPT‑2 fine‑tuned using LoRA. Includes full training, evaluation, and sampling pipeline with metrics for spelling, diversity, n‑gram overlap, ROUGE‑L, and poetic structure, trained on Emily Dickinson’s poems.",
    tags: [
    "Poetry Generation",
    "Language Modeling",
    "RNN",
    "LSTM",
    "GPT",
    "LoRA",
    "Fine-Tuning",
    "Tokenization",
    "Text Generation",
    "PyTorch",
    "NLP"
    ],
    repo: "https://github.com/ClementCI/poetry-generator",
    image: "/images/poetry.png",
    category: "Natural Language Processing"
  },

  // Probabilistic Machine Learning
  {
    title: "Coordinate Ascent Variational Inference (CAVI)",
    description: "Coordinate Ascent Variational Inference for a Gaussian model with Normal–Gamma prior, implemented from scratch. Synthetic experiments at different dataset sizes compare variational posteriors to exact Bayesian solutions and ML estimates, using ELBO convergence and contour visualizations.",
    tags: [
    "Variational Inference",
    "CAVI",
    "Bayesian Inference",
    "Gaussian Models",
    "ELBO",
    "Synthetic Data",
    "Numpy",
    "SciPy"
    ],
    repo: "https://github.com/ClementCI/cavi-variational-inference",
    image: "/images/variational_inference.png",
    category: "Probabilistic Machine Learning"
  },

  {
    title: "Reparameterization of Common Distributions",
    description: "Reparameterization techniques for Beta and Dirichlet distributions using differentiable approximations in PyTorch. Implements Kumaraswamy‑based inverse‑CDF sampling for Beta and logistic‑normal sampling for Dirichlet, enabling gradient‑based optimization in variational models.",
    tags: [
    "Reparameterization",
    "Variational Inference",
    "PyTorch",
    "Probabilistic Modeling"
    ],
    repo: "https://github.com/ClementCI/reparameterized-distributions",
    image: "/images/reparameterization.png",
    category: "Probabilistic Machine Learning"
  },

  {
    title: "Stochastic Variational Inference for Latent Dirichlet Allocation (LDA)",
    description: "Stochastic Variational Inference for LDA implemented from scratch and benchmarked against CAVI on synthetic datasets. Uses mini‑batch updates to scale inference to larger corpora, with ELBO tracking and runtime comparisons across dataset sizes and topic counts.",
    tags: [
    "LDA",
    "SVI",
    "Variational Inference",
    "CAVI",
    "Topic Modeling",
    "Bayesian Inference",
    "ELBO",
    "Numpy"
    ],
    repo: "https://github.com/ClementCI/lda-variational-inference",
    image: "/images/variational_inference.png",
    category: "Probabilistic Machine Learning"
  },

  {
    title: "Variational Autoencoder (VAE) for MNIST Latent Representation and Image Generation",
    description: "Variational Autoencoder trained on MNIST to learn a structured latent space and generate digit images. Compares KL‑based and MMD‑based regularization, showing differences in latent organization and reconstruction quality. Includes full training, sampling, and visualization pipeline.",
    tags: [
    "VAE",
    "Latent Representation",
    "Image Generation",
    "MNIST",
    "Reparameterization",
    "KL Divergence",
    "MMD",
    "PyTorch",
    "Generative Models"
    ],
    repo: "https://github.com/ClementCI/vae-mnist",
    image: "/images/vae.png",
    category: "Probabilistic Machine Learning"
  },

  // Vision
  {
    title: "Edge Detection and Hough Transform",
    description: "Multiscale edge detection using Gaussian‑derivative filters combined with standard and gradient‑weighted Hough transforms for robust line extraction. Includes zero‑crossing localization, gradient‑based thresholding, accumulator smoothing, and visualization of detected edges and lines.",
    tags: [
    "Edge Detection",
    "Hough Transform",
    "Gaussian Derivatives",
    "Image Processing",
    "Computer Vision",
    "Line Detection",
    "NumPy",
    "SciPy"
    ],
    repo: "https://github.com/ClementCI/edge-detection",
    image: "/images/cnn.png",
    category: "Computer Vision"
  },

  {
    title: "Filtering Operations",
    description: "Frequency‑domain filtering experiments using the Discrete Fourier Transform to study sine‑wave structure, magnitude/phase interpretation, Gaussian smoothing via FFT, noise‑reduction filters, and aliasing effects under subsampling. Includes comparisons of Gaussian, median, and ideal low‑pass filters on noisy images.",
    tags: [
    "Fourier Transform",
    "Frequency Filtering",
    "Gaussian Filtering",
    "Image Processing",
    "Aliasing",
    "Computer Vision",
    "NumPy",
    "SciPy"
    ],
    repo: "https://github.com/ClementCI/filtering-operations",
    image: "/images/cnn.png",
    category: "Computer Vision"
  },

  {
    title: "CNN Architectures for Image Classification: From VGG to ConvNeXt",
    description: "Systematic exploration of CNN architectures for image classification, from VGG baselines to ResNet, SE/CBAM attention modules, and ConvNeXt‑Tiny. Includes ablations on regularization, data augmentation, loss robustness under noisy labels, and training from scratch on CIFAR‑10/100 and ImageNette.",
    tags: [
    "CNN",
    "Image Classification",
    "VGG",
    "ResNet",
    "SE",
    "CBAM",
    "ConvNeXt",
    "Regularization",
    "PyTorch"
    ],
    repo: "https://github.com/ClementCI/advanced-cnn-classifier",
    image: "/images/image_classification.png",
    category: "Computer Vision"
  },

  {
    title: "Image Matching & 3D Reconstruction",
    description: "Feature‑based image matching and 3D reconstruction pipeline using SIFT, RANSAC, homography estimation for planar scenes, and fundamental matrix estimation for general scenes. Includes triangulation of 3D points, robustness analysis under noise/outliers, and comparisons of alignment quality across geometric models.",
    tags: [
    "Image Matching",
    "Homography",
    "RANSAC",
    "3D Reconstruction",
    "SIFT",
    "Computer Vision",
    "OpenCV"
    ],
    repo: "https://github.com/ClementCI/image-matching-3d-reconstruction",
    image: "/images/cnn.png",
    category: "Computer Vision"
  },

  {
    title: "Video Reconstruction with CLIP, HDBSCAN and TSP Optimization",
    description: "Unsupervised video reconstruction pipeline using CLIP embeddings, HDBSCAN clustering, and TSP‑based frame ordering. Frames are semantically encoded, filtered for noise, and reordered via nearest‑neighbor + 2‑Opt optimization to recover a coherent visual sequence from corrupted or shuffled videos.",
    tags: [
    "Video Reconstruction",
    "CLIP",
    "HDBSCAN",
    "TSP",
    "Unsupervised Learning",
    "Frame Ordering",
    "Computer Vision",
    "PyTorch",
    "Optimization"
    ],
    repo: "https://github.com/ClementCI/video-reconstructor",
    image: "/images/video_reconstruction.png",
    category: "Computer Vision"
  },
];
