export default [
    {
        title: 'AskReddit comments - topic analysis',
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
        title: 'Sentiment Analysis of Reddit posts',
        imgUrl: 'assets/sentiment_analysis.png',
        stack:['Pytorch', 'Pandas', 'Hugginface', 'RoBERTa', 'Scikit-learn', 'MatplotLib', 'Seaborn'],
        link: 'https://github.com/andrea-mar/BBK_MScDataScience2reddit_posts/blob/main/sentiment_analysis_aba_posts_full_set.ipynb', 
        links: [
                {'Multiclass sentiment classification fine-tunning notebook': 'https://github.com/andrea-mar/BBK_MScDataScience2reddit_posts/blob/main/reddit_Posts_sentiment_multiclass_SiEBERT_100epochs_full_set.ipynb'},
                {'Multilabel author classification fine-tuning notebook': 'https://github.com/andrea-mar/BBK_MScDataScience2reddit_posts/blob/main/reddit_Posts_author_multilabel_distilroberta_100epochs_full_set.ipynb'},
                {'Binary author classification notebook': 'https://github.com/andrea-mar/BBK_MScDataScience2reddit_posts/blob/main/reddit_Posts_author_binary_distilroberta_100epochs_full_set.ipynb'},
                {'Sentiment analysis notebook': 'https://github.com/andrea-mar/BBK_MScDataScience2reddit_posts/blob/main/sentiment_analysis_aba_posts_full_set.ipynb'},
                {'MSc Thesis document': 'https://drive.google.com/file/d/1AJNrq2terQ6cfBOTaw7LSf1XYLJpcsqN/view?usp=sharing'}
            ]
       
    },
    {
        title: 'Obesity predictors world-wide',
        imgUrl: 'assets/obesity_predictors.png',
        stack:['Python', 'Pandas', 'Scikit-learn', 'MatplotLib', 'Seaborn'],
        link: 'https://github.com/andrea-mar/DSTA-bbk-ms-dataScience/blob/main/coursework%20DSTA-final-version.ipynb',
        links: [
                {'Feature selection (PCA), Liniar Regression and Random Forest notebook': 'https://github.com/andrea-mar/DSTA-bbk-ms-dataScience/blob/main/coursework%20DSTA-final-version.ipynb'}
            ]
    },
    // {
    //     title: 'Reddit topic analysis',
    //     imgUrl: '',
    //     stack:['Python', 'Pandas', 'BERTopic', 'Datamapplot', 'OpenAI GPT'],
    //     link: '',
    //     links: [
    //             {'Topic analysis and visualizations notebook': ''}
    //         ]
       
    // }

]