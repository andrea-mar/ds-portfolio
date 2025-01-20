export default [
    {
        title: 'Credit Card Default Prediction with XGBoost and SHAP',
        description:'This project assesses the risk of customer loan defaults using the Default of Credit Card Clients Dataset from Kaggle. An XGBoost classifier was implemented, with SHAP values used to evaluate feature impact, revealing that payment status, credit limits, and bill amounts were the most significant factors in predicting credit card defaults.', 
        imgUrl: 'assets/credit_card_kaggle.png', 
        stack:['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'SHAP', 'Matplotlib', 'Seaborn'],
        link: '',
        links: [
                {'Classification model notebook': 'https://github.com/andrea-mar/credit_default_risk/blob/main/credit_risk_model.ipynb'},
                {'Inference notebook': 'https://github.com/andrea-mar/credit_default_risk/blob/main/inference.py'},
            ]
    },
    {
        title: 'Why I Don\'t Drink: Mining Reddit\'s Sober Stories',
        description:'Data from an r/AskReddit post was analyzed using BERTopic, SentenceTransformer, and Llama 2 embeddings to uncover the reasons people give for not drinking alcohol. The analysis pipeline included data extraction via PRAW and the Reddit API, with results visualized through Matplotlib.', 
        imgUrl: 'assets/askreddit_bertopic_llama2.png',
        stack:['Python', 'Pandas', 'BERTopic', 'Llama2','Huggingface', 'Matplotlib', 'Reddit API', 'Praw'],
        link: '',
        links: [
                {'Comments extraction with Praw notebook': 'https://github.com/andrea-mar/askreddit_topicanalysis/blob/main/1_get_redditpost_comments.ipynb'},
                {'Text cleaning notebook': 'https://github.com/andrea-mar/askreddit_topicanalysis/blob/main/2_reddit_comments_text_clean.ipynb'},
                {'Topic analysis and visualizations notebook': 'https://github.com/andrea-mar/askreddit_topicanalysis/blob/main/3a_bertopic_askreddit_comments.ipynb'},
                {'Topics with Llama2 notebook': 'https://github.com/andrea-mar/askreddit_topicanalysis/blob/main/3b_bertopic_askreddit_comments_Llama2.ipynb'}
            ]
    },
    {
        title: 'Decoding ABA Therapy Debates: AI Meets Autism Research',
        description:'Using RoBERTa-based models, this project analyzed Reddit discussions about Applied Behavior Analysis (ABA) therapy for autism. Custom NLP models were trained to classify post sentiments and author types (professionals, parents, and individuals with ASD), achieving over 80% accuracy. This automated approach matched human coding reliability, demonstrating AI\'s potential for large-scale analysis of mental health discussions.',
        imgUrl: 'assets/sentiment_analysis.png',
        stack:['Pytorch', 'Pandas', 'Huggingface', 'RoBERTa', 'Scikit-learn', 'MatplotLib', 'Seaborn'],
        link: '', 
        links: [
                {'Multiclass sentiment classification fine-tuning notebook': 'https://github.com/andrea-mar/BBK_MScDataScience2reddit_posts/blob/main/reddit_Posts_sentiment_multiclass_SiEBERT_100epochs_full_set.ipynb'},
                {'Multilabel author classification fine-tuning notebook': 'https://github.com/andrea-mar/BBK_MScDataScience2reddit_posts/blob/main/reddit_Posts_author_multilabel_distilroberta_100epochs_full_set.ipynb'},
                {'Binary author classification notebook': 'https://github.com/andrea-mar/BBK_MScDataScience2reddit_posts/blob/main/reddit_Posts_author_binary_distilroberta_100epochs_full_set.ipynb'},
                {'Sentiment analysis notebook': 'https://github.com/andrea-mar/BBK_MScDataScience2reddit_posts/blob/main/sentiment_analysis_aba_posts_full_set.ipynb'},
                {'MSc Thesis document': 'https://drive.google.com/file/d/1AJNrq2terQ6cfBOTaw7LSf1XYLJpcsqN/view?usp=sharing'}
            ]
    },
    // {
    //     title: 'Global Obesity Patterns: Predictors and Trends',
    //     description:'A Random Forest Regression model was trained on the Healthy Lifestyle Cities Report 2021 data to uncover key urban factors shaping obesity rates. Through feature selection and PCA dimensionality reduction, the analysis revealed some of the predictors of obesity across global cities, offering insights into worldwide health trends.',
    //     imgUrl: 'assets/obesity_predictors.png',
    //     stack:['Python', 'Pandas', 'Scikit-learn', 'MatplotLib', 'Seaborn'],
    //     link: 'https://github.com/andrea-mar/DSTA-bbk-ms-dataScience/blob/main/coursework%20DSTA-final-version.ipynb',
    //     links: [
    //             {'Feature selection (PCA), Linear Regression and Random Forest notebook': 'https://github.com/andrea-mar/DSTA-bbk-ms-dataScience/blob/main/coursework%20DSTA-final-version.ipynb'}
    //         ]
    // },



    // {
    //     title: 'Reddit topic analysis',
    //     description:'This project is about extracting comments from Reddit posts and performing topic analysis on them. ',
    //     imgUrl: '',
    //     stack:['Python', 'Pandas', 'BERTopic', 'Datamapplot', 'OpenAI GPT'],
    //     link: '',
    //     links: [
    //             {'Topic analysis and visualizations notebook': ''}
    //         ]
       
    // }

]