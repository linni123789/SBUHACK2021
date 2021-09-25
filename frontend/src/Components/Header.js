const Header = (props) =>{
    console.log(props.last)
    const price = ((props.last.High+props.last.Low)/2).toFixed(2)
    const asset = ((props.share*price)+props.money).toFixed(2)
    const increase = (asset-props.begin).toFixed(2)
    const total = ((increase/props.begin)*100).toFixed(2)
    return(
        <div class="header-2">

            <nav class="bg-white py-2 md:py-4">
                <div class="container px-4 mx-auto md:flex md:items-center">

                <div class="flex justify-between items-center">
                    <span class="font-bold text-xl text-black">{props.stock}</span>
                    <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                    <i class="fas fa-bars"></i>
                    </button>
                </div>

                <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                    {/* <span class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">{props.chartDatas[props.chartDatas.length-2]}</span> */}
                    <span class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Stock Price : {price}</span>
                    <span class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Total : {asset}</span>
                    <span class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Shares : {props.share}</span>
                    <span class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Free Cash : {props.money.toFixed(2)}</span>
                    <span class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">{increase} $</span>
                    <span class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">{total} %</span>
                </div>
                </div>
            </nav>
        </div>
    )
}
export default Header