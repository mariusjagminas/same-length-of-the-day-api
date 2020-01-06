# The same length of the day REST API

Returns the next date when the length of the day is the same as on the specified date.
For example, in New York today is January 6th 2020 and the length of the day is 9 hours 23 minutes.
The next date when the length of the day will be the same is around December 5th 2020.

- URL

  `https://same-length-of-the-day-api.now.sh/`

- Method:

  `GET`

- URL params required:

  `date=[date in format YYYY-MM-DD]`

- Success response:

  - Code: 200
  - Content:

    ```javascript
    {
      "nextDate": "2020-12-05T00:00:00.000Z",
      "receivedDate": "2020-01-06"
    }
    ```

- Error response:

  - Code: 400
  - Content:

    ```javascript
      {
        "error": "Invalid date format"
      }
    ```

  OR

  - Code: 400
  - Content:

    ```javascript
        {
          "error": "Invalid query param"
        }
    ```

- Sample call:

  `https://same-length-of-the-day-api.now.sh?date=2020-01-06`
