import {AnumaWallet as BaseAnumaWallet} from '/node_modules/@anuma-network/ux/anuma-ux.js';

class AnumaWallet extends BaseAnumaWallet{
	makeFaucetRequest(subject, args){
		let origin = 'https://faucet.anuma.network';
		//origin = 'http://localhost:3000';
		const {address, amount} = args;
		let path = {
			'faucet-available': `available/${address}`,
			'faucet-request': `get/${address}/${amount}`
		}[subject];

		if(!path)
			return Promise.reject("Invalid request subject:"+subject)

		return fetch(`${origin}/api/${path}`, {
			method: 'GET'
		}).then(res => res.json())
	}
}

AnumaWallet.define("anuma-wallet")
