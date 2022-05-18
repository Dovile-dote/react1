function ZebraiIrBebrai ({sk}) {
    let spalva;
    if (sk===1) {
        spalva = 'red';
    }
    if (sk===2) {
        spalva = 'blue';
    }
    return (
        
        <>
        <h1 style={{color: spalva}}>Zebrai ir Bebrai</h1>
        </>
    )
}

export default ZebraiIrBebrai;