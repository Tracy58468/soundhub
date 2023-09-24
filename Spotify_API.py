#!/usr/bin/env python
# coding: utf-8

# ## Add in call function

# In[52]:


import spotipy


# In[53]:


from spotipy.oauth2 import SpotifyOAuth


# In[54]:


import json


# In[55]:


SPOTIPY_CLIENT_ID = 'cb03430b100d45bd944ba0b72c5cc3a6'
SPOTIPY_CLIENT_SECRET = 'f82f35997fac47ad8c7c120d994ebf05'


# In[56]:


SPOTIPY_REDIRECT_URI = 'http://localhost:3000'


# In[57]:


sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=SPOTIPY_CLIENT_ID,
                                               client_secret=SPOTIPY_CLIENT_SECRET,
                                               redirect_uri=SPOTIPY_REDIRECT_URI,
                                               scope='user-library-read'))


# In[58]:


def get_track_info(spotify_uri):
    try:
        track_info = sp.track(spotify_uri)
        if track_info:
            return track_info
        else:
            return None
    except Exception as e:
        print(f"Error retrieving track information: {str(e)}")
        return None


# In[59]:


def save_to_json(track_info, filename):
    if track_info:
        with open(filename, 'w', encoding='utf-8') as json_file:
            json.dump(track_info, json_file, ensure_ascii=False, indent=4)
        print(f"Track information saved to {filename}")


# In[ ]:


def main():
    track_name = ##Imported user input from React code
    results = sp.search(track_name, type='track', limit=1)

    # Check if any results were found
    if results['tracks']['items']:
        # Get the Spotify URI of the first result
        track_uri = results['tracks']['items'][0]['uri']
    filename = 'song_info.json'  # Change the filename as needed
    track_info = get_track_info(track_uri)
    if track_info:
        save_to_json(track_info, filename)


# In[61]:


if __name__ == "__main__":
    main()


# In[ ]:





# In[ ]:




