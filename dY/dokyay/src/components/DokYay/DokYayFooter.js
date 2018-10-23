import React    from 'react'
import { Link } from 'react-router-dom'

import withStyles from '@material-ui/core/styles/withStyles'
import List		  from '@material-ui/core/List'
import ListItem	  from '@material-ui/core/ListItem'

import Footer      from '../Footer/Footer'
import footerStyle from '../../assets/jss/material-kit-pro-react/components/footerStyle.jsx';

class DokYayFooter extends React.Component {
	state = {
		value: 0
	}

	render() {
		const { classes } = this.props

		return (
			<Footer content={
				<div style={{ position: 'relative', bottom: '0px'}}>
					<div className={classes.left}>
						<List className={classes.list} style={{marginTop: '16px'}}>
							<ListItem className={classes.inlineBlock}>
								<Link to='/tentang'
									style={{
										color:       '#000000',
										marginRight: '16px'
								}}>
									Tentang Kami
								</Link>
							</ListItem>
							<ListItem className={classes.inlineBlock}>
								<Link to='#'
									style={{
										color:       '#000000',
										marginRight: '16px'
								}}>
									Blog
								</Link>
							</ListItem>
							<ListItem className={classes.inlineBlock}>
								<Link to='#'
									style={{
										color:       '#000000',
										marginRight: '16px'
								}}>
									Admin
								</Link>
							</ListItem>
						</List>
					</div>
					<div className={classes.right}>
						&copy; {new Date().getFullYear()}, PT dokYAY.
					</div>
				</div>
			} />
		)
	}	
}

export default withStyles(footerStyle)(DokYayFooter)
