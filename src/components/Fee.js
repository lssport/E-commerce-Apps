import React, from 'react';

class Fee extends React.Component {
     constructor() {
        super();
this.state = {
  sisaUang: 0,
  persentaseUang: 0, 
  pemasukanUang: 0,
  pengeluaranUang: 0,
  transaksiIN: 0,
  transaksiOUT: 0,
  summary: [
    {
      deskripsi:'menerima gaji', 
      tanggal:'1 July 2022', 
      nominal:1000000, 
      category:'IN'
    }, 
    {
      deskripsi:'beli kopi', 
      tanggal:'2 July 2022', 
      nominal:20000, 
      category:'OUT'
    }
  ]
}
}
 render() {
  return (
    <>
    <div className='container py-5'>
      <div className='row'>
        <div className='col-12 text-center'>
      <h1 className='fw-bold'>FEEDUITEN APPS</h1>
      <hr className='w-75 mx-auto'/>
      <h2 className='fw-bold'>Rp.{this.state.sisaUang},-</h2>
      <span className='title-md'>sisa uang kamu tersisa {this.state.persentaseUang}% lagi</span>
      </div>
</div>
      <div className='row mt-4'>
      <div className='col-6'>
      <div className='card-wrapper p-4'>
       <div className='icon-wrapper-in mb-1'>
         <i className="bi bi-wallet2"></i>
         </div>
<span className='title-sm'>pemasukan</span>
<h3 className='fw-bold'>Rp.{this.state.pemasukanUang},-</h3>
<div>
<span className='title-sm text-ungu fw-bold'>50</span>
<span className='title-sm'> transaksi</span>
</div>
</div>
</div>
 <div className='col-6'>
  <div className='card-wrapper p-4'>
    <div className='icon-wrapper-out mb-1'>
      <i className="bi bi-cash-stack"></i>
      </div>
<span  className='title-sm'>pengeluaran</span>
<h3 className='fw-bold'>Rp.{this.state.pengeluaranUang},-</h3>
<div>
<span className='title-sm text-ungu fw-bold'>50</span><span className='title-sm'> transaksi</span>
</div>
</div>
</div>

</div>

<div className='row mt-5'>
  <div className='col-12 d-flex justify-content-between align-items-center'>
    <h4>Ringkasan Transaksi</h4>
    <div className='wrapper-button'>
     <button className='button btn-ungu px-3 py-2 me-2'>Pemasukan <i className="bi bi-plus-circle-fill"></i></button>
     <button className='button btn-pink px-3 py-2'>Pengeluaran <i className="bi bi-dash-circle-fill"></i></button>
      </div>
      </div>
      </div>
      <div className='row mt-4'>
        {this.state.summary.map((sum, index) => {
          return (
        <div key={index} className='mb-3 col-12 d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center'>
        <div className={sum.category === 'IN' ?  'icon-wrapper-in' : 'icon-wrapper-out'}>
          <i className={sum.category === 'IN' ? "bi bi-wallet2" : "bi bi-bag-dash"}></i>
            </div>
    <div className='transaction ms-3 d-flex flex-column'>
      <h6>{sum.deskripsi}</h6>
      <span className='title-sm'>{sum.tanggal}</span>
      </div>
  </div>
      <h5 className={sum.category === 'IN' ?'text-money-In' : 'text-money-Out'}>Rp.{sum.nominal},-</h5>
    </div>
          )   
}) }
      </div>
      </div> 
</>
  )
}
}
export default Fee;