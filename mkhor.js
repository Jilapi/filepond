$(document)['ready'](function() {
        function _0x6a0fx1() {
            window['location']['assign']('https://www.nahian.life')
        }

        function _0x6a0fx2() {
            if ($('#credits')['length'] === 0) {
                _0x6a0fx1()
            } else {
                if ($('#creditlink')['length'] === 0) {
                    _0x6a0fx1()
                } else {
                    if ($('#creditlink')['attr']('href') !== 'https://www.nahian.life') {
                        _0x6a0fx1()
                    } else {
                        if ($('#creditlink')['text']() !== 'Nahian') {
                            _0x6a0fx1()
                        }
                    }
                }
            }
        }

        _0x6a0fx2();

        setInterval(function() {
                _0x6a0fx2()
            }

            , 5000)
    }

);
