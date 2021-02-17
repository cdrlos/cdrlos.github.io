#!/usr/bin/python3

import pandas as pd
import plotly.express as px

url = "http://api.open-notify.org/iss-now.json"

df = pd.read_json(url)

df['latitude'] = df.loc['latitude', 'iss_position']
df['longitude'] = df.loc['longitude', 'iss_position']
df.reset_index(inplace=True)
df = df.drop(['index', 'message'], axis=1)

fig = px.scatter_geo(df, lat='latitude', lon='longitude')
fig.write_html('where_is_iss.html',
        include_plotlyjs=False,
        full_html=False)
