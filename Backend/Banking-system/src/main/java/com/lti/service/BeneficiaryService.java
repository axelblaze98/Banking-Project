package com.lti.service;

import java.util.List;

import com.lti.dto.BeneficiaryDto;
import com.lti.dto.viewBeneficiary;

public interface BeneficiaryService {

	List<viewBeneficiary> getBeneficiaryNameAndAccNo(String fromAcc);
	void addBeneficiary(BeneficiaryDto benf);
}
