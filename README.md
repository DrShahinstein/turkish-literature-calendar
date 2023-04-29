# Turkish Literature Calendar

The Turkish Literature Calendar is actually a web application containing a calendar allowing users to highlight specific days based on their interests and view them nicely. With this application, users can easily determine which days are significant for them and view. The why this project is named Turkish Literature Calendar is that I've developed this project for my teacher's project in the school so I use this with the purpose of Turkish Literature.

## Requirements

- [poetry](https://python-poetry.org/)
- [yarn](https://yarnpkg.com/)

## Technologies

| Technology                                                           | Version  |
| -------------------------------------------------------------------- | -------- |
| [react](https://reactjs.org/)                                        | ^18.2.0  |
| [framer-motion](https://www.framer.com/motion/)                      | ^10.12.4 |
| [shortid](https://github.com/dylang/shortid)                         | ^2.2.16  |
| [python](https://www.python.org/)                                    | ^3.10    |
| [django](https://www.djangoproject.com/)                             | ^4.2     |
| [django rest framework](https://www.django-rest-framework.org/)      | ^3.14.0  |
| [django cors headers](https://pypi.org/project/django-cors-headers/) | ^3.14.0  |
| [python-decouple](https://pypi.org/project/python-decouple/)         | ^3.8     |

## Features

- Arrange specific days to you on the calendar using the django server.
- View specific days with an info-box that you specify using the django server.
- Highlight specific days using your own custom color that you specify using the django server.
- Display your specifications nicely in the front-end with a moderate design of calendar.

## Installation

To run the Turkish Literature Calendar on your local machine, follow these steps:

1. Clone the repository.

```bash
$ git clone https://github.com/DrShahinstein/turkish-literature-calendar.git
```

2. Set environment variables.
   | Env Variable | Value |
   | ------------------------- | ---------------------------------------------------------------------------------- |
   | `REACT_APP_DJANGO_API` | The API endpoint to the django API. This is your localhost if you run this project locally |
   | `DJANGO_SECURITY_KEY` | Django security key |
   | `DEBUG` | True/False to determine whether debug mode is active or not. |

3. Install the required dependencies using `poetry` and `yarn`.

```bash
[turkish-literature-calendar]$ cd server/
[turkish-literature-calendar]$ poetry install
[turkish-literature-calendar]$ poetry run python3 manage.py makemigrations && poetry run python3 manage.py migrate
[turkish-literature-calendar]$ poetry run python3 manage.py createsuperuser # create a super user to use admin panel later for specifications
[turkish-literature-calendar]$ poetry run python3 manage.py runserver
```

```bash
[turkish-literature-calendar]$ yarn
[turkish-literature-calendar]$ yarn start
```

4. Open your web browser and navigate to `http://localhost:3000`.

## Contributing

Pull requests are always welcome. If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

The Turkish Literature Calendar is licensed under the GNU License. See the LICENSE file for more information.
