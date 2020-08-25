package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.pojo.Beneficiary;
import com.lti.repository.BeneficiaryRepoImpl;

@Service
public class BeneficiaryServiceImpl implements BeneficiaryService{
	
	@Autowired
	BeneficiaryRepoImpl repo;
	
	@Override
	public String getBeneficiaryName(String fromAcc, String toAcc) {
		int id = repo.getIdByAccNumber(fromAcc, toAcc);
		Beneficiary beneficiary = repo.getBeneficiaryById(id);	
		return beneficiary.getBeneficiaryNickName();
	}
}
