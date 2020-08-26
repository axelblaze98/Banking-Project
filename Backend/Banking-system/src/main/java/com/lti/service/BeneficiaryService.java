package com.lti.service;

import com.lti.dto.BeneficiaryDto;

public interface BeneficiaryService {

	List<viewBeneficiary> getBeneficiaryNameAndAccNo(String fromAcc);
	void addBeneficiary(BeneficiaryDto benf);
}
