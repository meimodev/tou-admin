import React from "react";
import {Button, Card,} from "reactstrap";
import Container from "reactstrap/es/Container";
import {Link, Redirect} from "react-router-dom";
import * as HttpStatus from 'http-status-codes';

const RequestHandlerFunctions = {
    protocol: 'http',
    ipAddress: '192.168.1.5',
    port: '8000',
    baseAPIPath: 'api',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQzOWMyNzRmMWIwOTA1NzQ2Njc5NjU4NDRiMGNjMjFkNzhkZTZmMzc5ODEzZGE2ZTgxZjRkMGVkNDY4MjhiNjAyNTQzYzU2ZTdlZWQyNTZiIn0.eyJhdWQiOiIzIiwianRpIjoiNDM5YzI3NGYxYjA5MDU3NDY2Nzk2NTg0NGIwY2MyMWQ3OGRlNmYzNzk4MTNkYTZlODFmNGQwZWQ0NjgyOGI2MDI1NDNjNTZlN2VlZDI1NmIiLCJpYXQiOjE1Nzc0NTA5OTgsIm5iZiI6MTU3NzQ1MDk5OCwiZXhwIjoxNjA5MDczMzk4LCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.NeJ2jtv1Y42fCElzzoN91zJWEj4GQsfIXCyXhj5Ko8a1c3UVpnRYT9kMPKnIy-zRUHEUf9FfzyY-GabSssYMv43mXWqMPS20VTk95CeielqcmGrMZfN-f-2iqMkAXnh_QkXawlIaX9jR6yKAWfgj0yrPA72JRJpV-od3nMlIwnxCQ4HnMKkKB61gB3Zvv9Iuq2deKxusAILA-jNtKLzBcQ9Kj9xYvMDW8zE05NnaJ2S15hA1tN36NODBN8UQWo05xJOOs85kWjwrPCoNvRdU55sMGrzj3dGcprKkOcfbN72xdE-wI_kDrvvPd27I-tkkBagz0BLvkijY76ucklT7tDSAJxm7zMVsVSYHOIMIqeLT20eXRqErvWks-QZ6yaNOpXSz6sZtOiwUtXLdhVbX2b00hWv7lvMFRaiR6d6BzWGGHuOQXsVM2M6GJ5puRc-IxUt6-_hjKg64KPsikPIdf91O9rc9oXMkaDr087EeatbiN-IfW4fomWLYT_AuODiyNSdVYoLn0EVTQa759R6Oefjosb3iR9_JXTRw6anlkN5L_JMYzIWbZHuRUK0_NtfPw07ROk9qHI9U4IOEGtgHvtIcULdwUbeVJLNqmX9JgzJK1MCO_VCg82O550HwYOBWNJxUfurNnlN-3QL3Vwp2L3xqnyNPnvCXw0AU3IMdypk',


    signIn: function (isSignedIn, churchId, churchName, churchKelurahan, authToken) {
        sessionStorage.setItem('is_signed_in', isSignedIn ? '1' : '')
        sessionStorage.setItem('church_id', churchId)
        sessionStorage.setItem('church_name', churchName)
        sessionStorage.setItem('church_kelurahan', churchKelurahan)
        sessionStorage.setItem('auth_token', authToken)
        console.log('signing in !')
    },

    signOut: function () {
        sessionStorage.clear()
    },

    isSignedIn: function () {
        return sessionStorage.getItem('is_signed_in')
    },

    getSignInData: function () {
        return {
            church_id: sessionStorage.getItem('church_id'),
            church_name: sessionStorage.getItem('church_name'),
            church_kelurahan: sessionStorage.getItem('church_kelurahan'),
        }
    },

    generateLocalURLFromPath: function (path) {
        let port = this.port ? ":" + this.port : "";
        return this.protocol + '://' + this.ipAddress + port + '/' + this.baseAPIPath + path
    },

    /**
     *@param {object} parameter object use in parameter(key-value)
     * */
    generateConfigWithParameter: function (parameter) {
        return {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('auth_token')
            },
            params: parameter
        }
    },

    generateDefaultConfig: function () {
        return {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('auth_token')
            }
        }
    },
    /**
     * @param {boolean} isLoading .
     * @param {boolean} isError .
     * @param {error} error object from axios.catch.
     * @param {function} onTryAgain onClick function for error Handling(trying same request again).
     * @param {function} onRender main render if loading is done and error is false.
     */
    generateRenderWithLoadingAndErrorHandling: function (isLoading, isError, error, onTryAgain, onRender) {
        if (isLoading) {
            return <Container className="animated fadeIn text-center pt-3">
                <div className="spinner-border text-primary" role="status"/>
            </Container>
        }
        if (isError) {

            let errorMessage = '';
            let buttonFunction;
            let buttonText;
            let LinkComponent;

            console.log(error)
            if (error.message === 'Network Error') {
                console.log('NETWORK ERROR')
                errorMessage = 'Koneksi Internet bermasalah ! silahkan coba sesaat lagi'
                buttonFunction = () => window.location.reload()
                buttonText = 'Muat Kembali'
            } else {

                if (!error.response) {
                    console.log('NETWORK ERROR WITH NULL RESPONSE')

                    return <React.Fragment>
                        <div className="animated fadeIn">
                            <Card className="pt-3" style={{background: 'transparent', border: 'transparent'}}>
                                <div className="alert alert-warning text-center" role="alert">
                                    <i className="fa fa-warning text-danger pr-1"/> Koneksi Internet bermasalah ! Silahkan coba sesaat lagi<br/>(DOMException: Failed to execute 'open' on 'XMLHttpRequest')
                                </div>

                                <Button color="primary" onClick={()=>window.location.reload()}>
                                    <i className="fa fa-refresh pr-1"/> coba lagi
                                </Button>

                            </Card>
                        </div>
                    </React.Fragment>
                }
                if (error.response.status) console.log('error from RequestHandlerFunctions with code: ' + error.response.status)

                if (error.response.status === HttpStatus.UNAUTHORIZED) {
                    console.log(sessionStorage.getItem('auth_token'))
                    sessionStorage.clear()
                    alert('(401) SESI KADALUARSA! anda akan diarahkan ke halaman masuk. Silahkan masuk kembali untuk melanjutkan')
                    return <Redirect to='login'/>
                }
                //
                errorMessage = '(' + error.response.status + ')' + ' terjadi kesalahan silahkan coba lagi!'
                buttonFunction = onTryAgain
                buttonText = 'Coba Lagi'
                //
            }

            return <React.Fragment>
                <div className="animated fadeIn">
                    <Card className="pt-3" style={{background: 'transparent', border: 'transparent'}}>
                        <div className="alert alert-warning text-center" role="alert">
                            <i className="fa fa-warning text-danger pr-1"/> {errorMessage}
                        </div>
                        {LinkComponent ?
                            LinkComponent
                            :
                            <Button color="primary" onClick={buttonFunction}>
                                <i className="fa fa-refresh pr-1"/>{buttonText}
                            </Button>
                        }
                    </Card>
                </div>
            </React.Fragment>

        }
        return onRender
    }
}


export default RequestHandlerFunctions

