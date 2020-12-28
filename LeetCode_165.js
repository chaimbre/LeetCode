/**

*** LeetCode #165 ***

 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */


const trimZeroStringLeft = ( stringVar, letter='0' ) => {
    let idx=0;
    const sz = stringVar.length;
    while ( idx<sz-1 ) {
        if (stringVar[idx] != letter)
            break;
        idx++;
    }
    return stringVar.substring(idx,sz)
}

const getProcessedVersionStrings = ( version ) => {
    let vsplit = version.split(".")
    let sz = vsplit.length;
    for ( let idx=0; idx<sz; idx++ ) {
       vsplit[idx] = trimZeroStringLeft( vsplit[idx] )
    }
    return vsplit.filter(  elt => elt != '' )
}

var compareVersion = function(version1, version2) {
    
    const vbuf1 = getProcessedVersionStrings(version1);
    const vbuf2 = getProcessedVersionStrings(version2);

    sz1 = vbuf1.length;
    sz2 = vbuf2.length;
        
    for ( let idx=0; idx<Math.max(sz2,sz1); idx++ ) {
        if ( idx >= sz2 ) {
            if ( vbuf1.slice(idx,sz1).some( elt => elt != '0') )
                return 1;
        }
        else if ( idx >= sz1 ) {
            if ( vbuf2.slice(idx,sz2).some( elt => elt != '0') )
                return -1;
        }
        else if ( vbuf1[idx] != vbuf2[idx] )
            return parseInt(vbuf1[idx]) > parseInt(vbuf2[idx]) ? 1 : -1
    }
    return 0;
}
