/// <reference types = "cypress"/>

import req from '../support/api/requests'
import schemas from '../support/api/schemas'
import assertions from '../support/api/assertions'




context('Booking', () => {
    before(() => {
        req.doAuth()

    });
    it('Validar o contrato do GET Booking @contract', () => {
        req.getBooking().then(getBookingResponse => {
            assertions.validateContractOf(getBookingResponse, schemas.getBookingSchema())


        })
    });
    it('Criar uma Reserva com sucesso @functional', () => {
        req.postBooking()
            .then(postBookingResponse => {
                assertions.shouldHaveStatus(postBookingResponse, 200)
                assertions.shouldBookingIdBePresent(postBookingResponse)
                assertions.shouldHaveDefaultHeaders(postBookingResponse)
                assertions.shouldDurationBeFast(postBookingResponse)
                assertions.shoulHaveStatusText(postBookingResponse, 'OK')
            })
    });
    it('Tentar alterar uma reserva sem token @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateBookingWithoutToken(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
                assertions.shoulHaveStatusText(putBookingResponse, 'Forbidden')
                assertions.shouldDurationBeFast(putBookingResponse)
                assertions.shouldHaveDefaultHeaders(putBookingResponse)
                assertions.shouldNotIsOkStatusCode(putBookingResponse)
            })
        })

    });
    it('Alterar uma reserva com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateBooking(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 200)
                assertions.shouldIsOkStatusCode(putBookingResponse)
                assertions.shoulHaveStatusText(putBookingResponse, 'OK')
                assertions.shouldHaveAdditionalNeeds(putBookingResponse)
                assertions.shouldHaveBookingdates(putBookingResponse)
                assertions.shouldHaveDepositPaid(putBookingResponse)
                assertions.shouldHaveFirstName(putBookingResponse)
                assertions.shouldHaveLasttName(putBookingResponse)
                assertions.shouldHaveTotalPrice(putBookingResponse)
            })
        })
    });
    it('Alterar uma reserva inexistente @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateBookingNonexistent(postBookingResponse).then(putBookingResponse => {

                assertions.shouldHaveStatus(putBookingResponse, 405)
                assertions.shoulHaveStatusText(putBookingResponse, 'Method Not Allowed')
                assertions.shouldDurationBeFast(putBookingResponse)
                assertions.shouldHaveDefaultHeaders(putBookingResponse)
                assertions.shouldNotIsOkStatusCode(putBookingResponse)
            })
        })
    });
    it('Alterar uma reserva com token invalido @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateBookingWithInvalidToken(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
                assertions.shoulHaveStatusText(putBookingResponse, 'Forbidden')
                assertions.shouldDurationBeFast(putBookingResponse)
                assertions.shouldHaveDefaultHeaders(putBookingResponse)
                assertions.shouldNotIsOkStatusCode(putBookingResponse)
            })
        })
    });
    it('Excluir uma reserva com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.deleteBooking(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 201)
                assertions.shouldDurationBeFast(deleteBookingResponse)
                assertions.shouldHaveDefaultHeaders(deleteBookingResponse)
                assertions.shoulHaveStatusText(deleteBookingResponse, 'Created')

            })
        });

    });
    it('Excluir uma reserva Inexistente @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.deleteBookingNonexistent(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 405)
                assertions.shoulHaveStatusText(deleteBookingResponse, 'Method Not Allowed')
                assertions.shouldDurationBeFast(deleteBookingResponse)
                assertions.shouldHaveDefaultHeaders(deleteBookingResponse)
                assertions.shouldNotIsOkStatusCode(deleteBookingResponse)
            })
        });
    });
    it('Excluir uma reserva sem token @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.deleteBookingWithoutToken(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 403)
                assertions.shouldDurationBeFast(deleteBookingResponse)
                assertions.shoulHaveStatusText(deleteBookingResponse, 'Forbidden')
                assertions.shouldHaveDefaultHeaders(deleteBookingResponse)
                assertions.shouldNotIsOkStatusCode(deleteBookingResponse)
            })
        });
    });
    it('Excluir uma reserva com token invalido @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.deleteBookingWithInvalidToken(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 403)
                assertions.shoulHaveStatusText(deleteBookingResponse, 'Forbidden')
                assertions.shouldDurationBeFast(deleteBookingResponse)
                assertions.shouldHaveDefaultHeaders(deleteBookingResponse)
                assertions.shouldNotIsOkStatusCode(deleteBookingResponse)
            })
        });
    });
});

