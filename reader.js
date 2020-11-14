//---------------環境設定-----------------
//remixのボタンを押して取得したコントラクトアドレスを貼り付け
const Address = "0x3f1c66ce5062e604471b347b937ec5a7a8c6c25b";

//remixのボタンを押して取得したABIを貼り付け
const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "create",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "checkFactory",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	}
]

//metamask利用許可ダイアログを出す
ethereum.enable();


//--------------ここからメイン処理---------------
//------web3.jsの読み込み待ちのため、window.onloadにメイン処理を入れる--------

window.onload = async function () {

  //metamaskの準備
  web3js = new Web3(web3.currentProvider);
  //スマートコントラクト読み込み
  mycontract = new web3js.eth.Contract(ABI, Address);

  //1.00-beta.36と表示されるのが正しい
  console.log("reader.js_is_checking_web3.js_version..." + Web3.version);


  let fromblockchain1 = await mycontract.methods.checkFactory().call();
  document.getElementById("id3").innerHTML = fromblockchain1;
  
}
