import './App.css';


function App() {

  return (
    <div className="App">
      <div className='container-center-horizontal'>
        <div className='nickname'>

          <div className='view'>
            <div className='text-1 valign-text-middle nanumgothiccoding-normal-black-20px'>
              닉네임
            </div>
            <div className='overlap-group'>
              <div className='text_label valign-text-middle'>
                닉네임을 입력해주세요.
              </div>
              <div className='view-1'>
                <div className='text-2 valign-text-middle'>
                  0 / 10
                </div>
                <img className='line-2' src={require('./img/line.svg').default} alt=''/>
              </div>
            </div>
          </div>
          <div className='view-2'>
            <button> 미리하기 </button>

          </div>

        </div>

      </div>


    </div>
  );
}

export default App;
