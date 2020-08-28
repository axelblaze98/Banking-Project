package com.lti.repository;

import java.util.List;

import com.lti.dto.viewBeneficiary;
import com.lti.pojo.Beneficiary;

public interface BeneficiaryRepo {
	List<viewBeneficiary> getBeneficiary(String accNo);
	void save(Beneficiary benf);
	boolean isAccountPresent(String fromAcc, String toAcc);
}
