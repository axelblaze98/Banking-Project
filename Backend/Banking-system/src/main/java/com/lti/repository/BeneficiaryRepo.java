package com.lti.repository;

import com.lti.pojo.Beneficiary;

public interface BeneficiaryRepo {
	Beneficiary getBeneficiaryById(int bId);
	int getIdByAccNumber(String fromAcc, String toAcc);
	void save(Beneficiary benf);
	boolean isAccountPresent(String fromAcc, String toAcc);
}
