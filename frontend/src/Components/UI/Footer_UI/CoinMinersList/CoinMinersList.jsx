import './CoinMinersList.css'
import LinksListItem from '../LinksListItem/LinksListItem.jsx'
import BTC from '../../../../assets/images/coin_icons/btc.png'
import LTC from '../../../../assets/images/coin_icons/ltc.png'
import KAS from '../../../../assets/images/coin_icons/kaspa.png'
import ALPH from '../../../../assets/images/coin_icons/alpx.png'
import CKB from '../../../../assets/images/coin_icons/skb.png'
import ETC from '../../../../assets/images/coin_icons/etc.png'
import KDA from '../../../../assets/images/coin_icons/nekaspa.png'
import ZEC from '../../../../assets/images/coin_icons/zec.png'
import HNS from '../../../../assets/images/coin_icons/hns.webp'
import XMR from '../../../../assets/images/coin_icons/xmr.webp'
import DASH from '../../../../assets/images/coin_icons/dash.png'
import SCP from '../../../../assets/images/coin_icons/scp.webp'
import RXD from '../../../../assets/images/coin_icons/rxd.png'
import ALEO from '../../../../assets/images/coin_icons/aleo.png'
import { useTranslation } from 'react-i18next'
import '../../../../i18n.js'

function CoinMinersList() {
	const { t } = useTranslation()
	return (
		<ul className='footer__grid__links'>
			<li className='footer__title__links__list'>{t('miners_coin')}</li>
			<LinksListItem link={'catalog/'} icon={BTC} text='Bitcoin (BTC)' />
			<LinksListItem link={'catalog/'} icon={LTC} text='Litecoin (LTC)' />
			<LinksListItem link={'catalog/'} icon={KAS} text='Kaspa (KAS)' />
			<LinksListItem link={'catalog/'} icon={ALPH} text='Alephium (ALPH)' />
			<LinksListItem link={'catalog/'} icon={CKB} text='Nervos  (CKB)' />
			<LinksListItem link={'catalog/'} icon={ETC} text='Ethereum  (ETC)' />
			<LinksListItem link={'catalog/'} icon={KDA} text='Kadena  (KDA)' />
			<LinksListItem link={'catalog/'} icon={ZEC} text='Zcash  (ZEC)' />
			<LinksListItem link={'catalog/'} icon={HNS} text='Handshake  (HNS)' />
			<LinksListItem link={'catalog/'} icon={XMR} text='Monero  (XMR)' />
			<LinksListItem link={'catalog/'} icon={DASH} text='Dash  (DASH)' />
			<LinksListItem link={'catalog/'} icon={SCP} text='ScPrime  (SCP)' />
			<LinksListItem link={'catalog/'} icon={RXD} text='Radiant  (RXD)' />
			<LinksListItem link={'catalog/'} icon={ALEO} text='Aleo  (ALEO)' />
		</ul>
	)
}

export default CoinMinersList
