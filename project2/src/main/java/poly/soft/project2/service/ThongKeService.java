package poly.soft.project2.service;

import java.util.List;

import poly.soft.project2.dto.SumOfMoneyDTO;
import poly.soft.project2.dto.Top10ProductDTO;

public interface ThongKeService {
	List<SumOfMoneyDTO> statisticSumOfMoney(int year);
	List<Top10ProductDTO> list10Product(int month,int year);
}
