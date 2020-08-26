package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.dto.BeneficiaryDto;
import com.lti.exception.ServiceException;
import com.lti.pojo.Beneficiary;
import com.lti.repository.BeneficiaryRepo;
import com.lti.repository.OpenAccountRepo;

@Service
public class BeneficiaryServiceImpl implements BeneficiaryService{
	
	@Autowired
	BeneficiaryRepo repo;
	@Autowired
	OpenAccountRepo accountRepo;

	@Override
	public List<viewBeneficiary> getBeneficiaryNameAndAccNo(String fromAcc) {
		 return repo.getBeneficiary(fromAcc);
	}

	@Override
	public void addBeneficiary(BeneficiaryDto benf) {
		// TODO Auto-generated method stub
		System.out.println(benf);
		System.out.println(benf.getBenfAcNumber());
		System.out.println(benf.getUserAcNumber());
		System.out.println(accountRepo.isAccountActive(benf.getBenfAcNumber()));
		try {
			if(!accountRepo.isAccountActive(benf.getBenfAcNumber())) {
				throw new ServiceException("Beneficiary Account does not exist");
			}
			else {
				if(repo.isAccountPresent(benf.getUserAcNumber(), benf.getBenfAcNumber())) {
					throw new ServiceException("Beneficiary already exist");
				}
				else {
					Beneficiary beneficiary = new Beneficiary();
					
					beneficiary.setBenefAccountNumber(benf.getBenfAcNumber());
					beneficiary.setUserAccountName(benf.getUserAcNumber());
					beneficiary.setBeneficiaryName(benf.getName());
					beneficiary.setBeneficiaryNickName(benf.getNickName());
					System.out.println(beneficiary);
					repo.save(beneficiary);
				}
			}
		}catch (Exception e) {
				throw new ServiceException(e.getMessage());
				// TODO: handle exception
		}
	}
}