package poly.soft.project2.enumeration;

public enum HDTrangThaiEnum {
	IN_PROGRESS(0), DONE(1),CANCEL(2);
	
	
	private HDTrangThaiEnum(int state) {
		this.state = state;
	}
	private int state;

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}
	
	
}
