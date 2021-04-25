class Requests {
    getPing() {
        return cy.request({
            method: 'GET',
            url: 'ping',
        })
    }
    getBooking() {
        return cy.request({
            method: 'GET',
            url: 'booking/20'
        })
    }
    postBooking() {
        return cy.request({
            method: 'POST',
            url: 'booking',
            body: {
                "firstname": "Jim",
                "lastname": "Brown",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2020-01-01",
                    "checkout": "2021-01-02"
                },
                "additionalneeds": "Breakfast"
            }
        })
    }
    updateBookingWithoutToken(response) {
        const id = response.body.bookingid
        return cy.request({
            method: 'PUT',
            url: `booking/${id}`,
            body: {
                "firstname": "Jim",
                "lastname": "Carlson",
                "totalprice": 111,
                "depositpaid": false,
                "bookingdates": {
                    "checkin": "2020-01-05",
                    "checkout": "2021-01-06"
                },
                "additionalneeds": "Lunch"
            },
            failOnStatusCode: false
        })
    }

    updateBooking(response) {
        const id = response.body.bookingid
        return cy.request({
            method: 'PUT',
            headers: {
                Cookie: `token=${Cypress.env('token')}`
            },
            url: `booking/${id}`,
            body: {
                "firstname": "Jim",
                "lastname": "Carlson",
                "totalprice": 111,
                "depositpaid": false,
                "bookingdates": {
                    "checkin": "2020-01-05",
                    "checkout": "2021-01-06"
                },
                "additionalneeds": "Lunch"
            },
            failOnStatusCode: false
        })

    }
    updateBookingNonexistent(response) {
        const id = response.body.bookingid
        return cy.request({
            method: 'PUT',
            headers: {
                Cookie: `token=${Cypress.env('token')}`
            },
            url: `booking/999999}`,
            body: {
                "firstname": "Jim",
                "lastname": "Carlson",
                "totalprice": 111,
                "depositpaid": false,
                "bookingdates": {
                    "checkin": "2020-01-05",
                    "checkout": "2021-01-06"
                },
                "additionalneeds": "Lunch"
            },
            failOnStatusCode: false
        })
    }
    updateBookingWithInvalidToken(response) {
        const id = response.body.bookingid
        return cy.request({
            method: 'PUT',
            headers: {
                Cookie: 'token=abc123'
            },
            url: `booking/${id}`,
            body: {
                "firstname": "Jim",
                "lastname": "Carlson",
                "totalprice": 111,
                "depositpaid": false,
                "bookingdates": {
                    "checkin": "2020-01-05",
                    "checkout": "2021-01-06"
                },
                "additionalneeds": "Lunch"
            },
            failOnStatusCode: false
        })
    }
    postAuth() {
        return cy.request({
            method: 'POST',
            url: 'auth',
            body: {
                "username": "admin",
                "password": "password123"
            }
        })
    }
    doAuth() {
        this.postAuth().then(authResponse => {
            const token = authResponse.body.token;
            Cypress.env('token', token)
        })

    }
    deleteBooking(response) {
        const id = response.body.bookingid
        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            headers: {
                Cookie: `token=${Cypress.env('token')}`
            },
            failOnStatusCode: false
        })
    }

    deleteBookingWithoutToken(response) {
        const id = response.body.bookingid
        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            failOnStatusCode: false
        })
    }

    deleteBookingNonexistent(response) {
        const id = 1515633388
        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            headers: {
                Cookie: `token=${Cypress.env('token')}`
            },
            failOnStatusCode: false
        })
    }

    deleteBookingWithInvalidToken(response) {
        const id = response.body.bookingid
        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            headers: {
                Cookie: 'AbC123Agilizei2021'
            },
            failOnStatusCode: false
        })
    }

}
export default new Requests();