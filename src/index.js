const { showFCPBox, showLCPBox } = require('./lcp-fcp')
const {mode, getMode} = require('./urlparser')
const {simulateBlocking} = require('./tbt') 

const current_mode = getMode()
if (current_mode.mode === mode.LCP_FCP){
    window.setTimeout(showLCPBox, current_mode.lcp)
    window.setTimeout(showFCPBox, current_mode.fcp)
    return
}

if (current_mode.mode === mode.TBT){
    window.setTimeout(showFCPBox, current_mode.fcp)
    simulateBlocking(current_mode.tbt)
    return
}

document.write('none')