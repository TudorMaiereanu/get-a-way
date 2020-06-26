# Epidemiological-Estimating

With the current COVID-19 outbreak, it is now more relevant than ever to reliably estimate the spread of epidemics and assess the effect of different measures taken in real time. Building on current work by the Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE) to aid in the estimation of the pandemic’s spread, we provide a real-time visualization dashboard for the estimation of current infection levels, based on a sensor fusion system that incorporates data reported by the WHO, various governments, news organizations as well as manually scraped data from Google search trends and social media activity.
Furthermore, the visualization dashboard will provide country-level information about current measures (automatically extracted using NLP on news data and social media activity) as well as their effect on the virus’s spread to provide real-time feedback on the efficacy of such measures.

## Tasks

### Sensor Fusion System for Estimation

Sensor fusion algorithms play an integral role in the combination and thematic linking of data from disparate sources. Therefore, by using publically available data regarding the virus, augmented with social media and google trends data, I intend to create an accurate estimation of the current cases.

### Extraction and Evaluation of Current Measures

Implementing a natural language processing (NLP) system that extracts daily information on the current measures being implemented against the virus; from online news media.
Comparing and contrasting the current measures with previous/no/different measures by forecasting the effects based on historical data.

### Time Series Forecasting

Leveraging the collected data to predict future levels of the virus. In particular, the inflec- tion point, at which the spread of the virus would cease to be exponential; allowing for the planning of measures that would return the world to a state of normality.

### Visualization Dashboard

Dashboard using Python visualizing findings pertaining to the growth, spread and forecasting of the virus.