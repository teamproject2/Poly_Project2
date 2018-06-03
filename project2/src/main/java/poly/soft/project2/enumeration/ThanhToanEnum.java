package poly.soft.project2.enumeration;

public enum ThanhToanEnum {
	TIỀN_MẶT(0),CHUYỂN_KHOẢN(1);
	
	private int type;

	private ThanhToanEnum(int type) {
		this.type = type;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}
	
	
}
