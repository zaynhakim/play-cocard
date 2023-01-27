import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
<img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
<div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
<div class="relative bg-gradient-to-tl from-teal-500/25 px-6 pt-10 pb-8 text-gray-900 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
  <div class="mx-auto max-w-md">
    <div class="flex flex-row items-center gap-3">
      <div>Logo</div>
      <header class="drop-shadow-sm">
        <h1 class="text-2xl font-semibold text-cyan-600">Panitia Penerimaan Santri Baru</h1>
        <h2 class="text-3xl font-bold text-cyan-600">SMP-SMA ALI MAKSUM</h2>
        <div class="text-lg font-medium">Tahun Pelajaran 2023/2024</div>
      </header>
    </div>
    <div class="mt-8 rounded-xl border bg-gray-50/70 p-6">
      <h3 class="text-center text-2xl font-bold">PANITIA</h3>
      <div class="my-4 grid grid-flow-row gap-4">
        <div class="grid grid-flow-col grid-cols-6 items-center">
          <div class="col-span-2 text-xl">Nama</div>
          <div class="col-span-4 h-12 rounded-2xl bg-white p-2 text-xl"></div>
        </div>
        <div class="grid grid-flow-col grid-cols-6 items-center">
          <div class="col-span-2 text-xl">Jabatan</div>
          <div class="col-span-4 h-12 rounded-2xl bg-white p-2 text-xl"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`

setupCounter(document.querySelector('#counter'))
