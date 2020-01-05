const protocol = 'http'
const ipAddress = '192.168.1.137'
const port = '8000'
const baseAPIPath = 'api'

const RequestHandlerFunctions = {
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQzOWMyNzRmMWIwOTA1NzQ2Njc5NjU4NDRiMGNjMjFkNzhkZTZmMzc5ODEzZGE2ZTgxZjRkMGVkNDY4MjhiNjAyNTQzYzU2ZTdlZWQyNTZiIn0.eyJhdWQiOiIzIiwianRpIjoiNDM5YzI3NGYxYjA5MDU3NDY2Nzk2NTg0NGIwY2MyMWQ3OGRlNmYzNzk4MTNkYTZlODFmNGQwZWQ0NjgyOGI2MDI1NDNjNTZlN2VlZDI1NmIiLCJpYXQiOjE1Nzc0NTA5OTgsIm5iZiI6MTU3NzQ1MDk5OCwiZXhwIjoxNjA5MDczMzk4LCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.NeJ2jtv1Y42fCElzzoN91zJWEj4GQsfIXCyXhj5Ko8a1c3UVpnRYT9kMPKnIy-zRUHEUf9FfzyY-GabSssYMv43mXWqMPS20VTk95CeielqcmGrMZfN-f-2iqMkAXnh_QkXawlIaX9jR6yKAWfgj0yrPA72JRJpV-od3nMlIwnxCQ4HnMKkKB61gB3Zvv9Iuq2deKxusAILA-jNtKLzBcQ9Kj9xYvMDW8zE05NnaJ2S15hA1tN36NODBN8UQWo05xJOOs85kWjwrPCoNvRdU55sMGrzj3dGcprKkOcfbN72xdE-wI_kDrvvPd27I-tkkBagz0BLvkijY76ucklT7tDSAJxm7zMVsVSYHOIMIqeLT20eXRqErvWks-QZ6yaNOpXSz6sZtOiwUtXLdhVbX2b00hWv7lvMFRaiR6d6BzWGGHuOQXsVM2M6GJ5puRc-IxUt6-_hjKg64KPsikPIdf91O9rc9oXMkaDr087EeatbiN-IfW4fomWLYT_AuODiyNSdVYoLn0EVTQa759R6Oefjosb3iR9_JXTRw6anlkN5L_JMYzIWbZHuRUK0_NtfPw07ROk9qHI9U4IOEGtgHvtIcULdwUbeVJLNqmX9JgzJK1MCO_VCg82O550HwYOBWNJxUfurNnlN-3QL3Vwp2L3xqnyNPnvCXw0AU3IMdypk',
    generateLocalURLFromPath: function (path) {
        return protocol + '://' + ipAddress + ':' + port + '/' + baseAPIPath + path
    },
    generateConfigWithParameter: function (parameter) {
        return {
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
            params: parameter

        }
    },

    generateDefaultConfig: function () {
        return {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
    }
}

export default RequestHandlerFunctions

