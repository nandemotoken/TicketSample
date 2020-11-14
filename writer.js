//--------------ここからメイン処理---------------
//------writerはボタンが押されたときに動くようにするので、ボタンと関連させる関数を作ってメイン処理を入れる--------

async function myButtonClicked() {

	//metamaskの準備
	web3js = new Web3(web3.currentProvider);
	//スマートコントラクト読み込み
	mycontract = new web3js.eth.Contract(ABI, Address);

	//1.00-beta.36と表示されるのが正しい
	console.log("writer.js_is_checking_web3.js_version..." + Web3.version);

	let useraddress = await web3js.eth.getAccounts();
  mycontract.methods.create(document.getElementById('id100').value).send({ from: useraddress[0] });
	console.log("useraddress[0]_is_your_Address:" + useraddress[0]);
}
