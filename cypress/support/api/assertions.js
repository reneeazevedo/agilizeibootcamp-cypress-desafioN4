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

    shouldHaveAdditionalNeeds(response,additionalneeds) {
        expect(response.body.additionalneeds, 'Additionalneeds').to.be.eq(additionalneeds)
    }
    shouldHaveBookingdates(response,checkin,checkout) {
        expect(response.body.bookingdates.checkin, 'bookingdates').to.be.eq(checkin)
        expect(response.body.bookingdates.checkout, 'bookingdates').to.be.eq(checkout)
    }
    shouldHaveDepositPaid(response,depositpaid) {
        expect(response.body.depositpaid, 'depositpaid').to.be.eq(depositpaid)
    }
    shouldHaveFirstName(response,firstname) {
        expect(response.body.firstname, 'firstname').to.be.eq(firstname)
    }
    shouldHaveLasttName(response,lastname) {
        expect(response.body.lastname, 'lasttname').to.be.eq(lastname)
    }
    shouldHaveTotalPrice(response, totalprice) {
        expect(response.body.totalprice, 'firstname').to.be.eq(totalprice)
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