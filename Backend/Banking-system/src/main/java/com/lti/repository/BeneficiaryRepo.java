package com.lti.repository;

import com.lti.pojo.Beneficiary;

public interface BeneficiaryRepo {
	List<viewBeneficiary> getBeneficiary(String accNo);
	void save(Beneficiary benf);
	boolean isAccountPresent(String fromAcc, String toAcc);
}
