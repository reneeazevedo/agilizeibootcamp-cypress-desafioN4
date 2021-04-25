class Assertions {
    shouldHaveStatus(response, status) {
        expect(response.status, `staus is ${status}`).to.eq(status)
    }
    validateContractOf(response, schema) {
        return cy.wrap(response.body).should(
            schema
        )
    }
    shouldBookingIdBePresent(response) {
        expect(response.body.bookingid, 'bookingid exists').to.not.be.null
    }
    shouldHaveDefaultHeaders(response) {
        expect(response.headers, 'default headers').to.include({
            server: 'Cowboy',
            connection: 'keep-alive',
            'x-powered-by': 'Express',


        })
    }
    shouldHaveContentTypeAppJson(response) {
        expect(response.headers, 'content type').to.include({
            'content-type': 'application/json; charset=utf-8'

        })
    }
    shouldDurationBeFast(response) {
        expect(response.duration, 'duration').to.lessThan(900)
    }

    shouldNotIsOkStatusCode(response) {
        expect(response.isOkStatusCode, 'IsOkStatusCode').to.be.eq(false)
    }
    shouldIsOkStatusCode(response) {
        expect(response.isOkStatusCode, 'IsOkStatusCode').to.be.eq(true)
    }

    shouldHaveAdditionalNeeds(response) {
        expect(response.body.additionalneeds, 'Additionalneeds').to.be.eq('Lunch')
    }
    shouldHaveBookingdates(response) {
        expect(response.body.bookingdates.checkin, 'bookingdates').to.be.eq('2020-01-05')
        expect(response.body.bookingdates.checkout, 'bookingdates').to.be.eq('2021-01-06')
    }
    shouldHaveDepositPaid(response) {
        expect(response.body.depositpaid, 'depositpaid').to.be.eq(false)
    }
    shouldHaveFirstName(response) {
        expect(response.body.firstname, 'firstname').to.be.eq('Jim')
    }
    shouldHaveLasttName(response) {
        expect(response.body.lastname, 'firstname').to.be.eq('Carlson')
    }
    shouldHaveTotalPrice(response) {
        expect(response.body.totalprice, 'firstname').to.be.eq(111)
    }


    shoulHaveStatusText(response, msg) {
        switch (msg) {
            case 'Created':
                expect(response.statusText, 'status Text Created').to.be.eq('Created')
                break;
            case 'Method Not Allowed':
                expect(response.statusText, 'status Text MethodNotAllowed').to.be.eq('Method Not Allowed')
                break;
            case 'OK':
                expect(response.statusText, 'status Text OK').to.be.eq('OK')
                break;
            case 'Forbidden':
                expect(response.statusText, 'status Text Forbidden').to.be.eq('Forbidden')
                break;
            default:
                console.log('Msg not found!!!' + msg);
        }
    }

}
export default new Assertions();