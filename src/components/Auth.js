import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const Auth = props => {
	const { setIsAuth } = props

	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, provider)
			setIsAuth(true)
			cookies.set('auth-token', result.user.refreshToken)
		} catch (err) {
			console.error(err)
		}
	}
	return (
		<div className='auth'>
			<p>Sign In With Google to Continue</p>
			<button onClick={signInWithGoogle}>Sign in With Google</button>
		</div>
	)
}
