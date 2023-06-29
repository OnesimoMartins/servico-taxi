package engsoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import engsoft.business.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
