import { v4 as uuidv4 } from 'uuid';

class Generator {
	static randomId(): string {
		return uuidv4();
	}
}

export default Generator;
