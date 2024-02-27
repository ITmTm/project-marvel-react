import img from './error.mp4';
const ErrorMessage = () => {
	return (
		<img style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto'}} src={img} alt={error} />
	)
}

export default ErrorMessage;