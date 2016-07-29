#!/usr/bin/python

from jinja2 import Template  
from flask import Flask
import sqlite3
conn = sqlite3.connect('transcriptme.db')
c = conn.cursor()


app = Flask('TranscriptMe')

@app.route("/")
def hello():
	template = None
	c.execute('SELECT * FROM grades')

	with open("/Users/OmaTechExplorers/Desktop/TranscriptMe/Welcome.html", "rb") as fh:
		template = Template(fh.read().decode('utf-8'))
		return template.render(name='Omawattie Singh', rows=c.fetchall())

if __name__ == "__main__":
    app.run()
    


# with open("/Users/OmaTechExplorers/Desktop/TranscriptMe/Homepage2.html", "rb") as fh:
#     template = Template(fh.read().decode('utf-8'))
#     print template.render(name='John Doe')


#with open("my_new_file.html", "wb") as fh:
#   fh.write(output_from_parsed_template)
