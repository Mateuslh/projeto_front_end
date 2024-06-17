package com.example.tributosV2.service;

import com.example.tributosV2.exception.NotFoundException;
import com.example.tributosV2.model.Contribuinte.Contribuinte;
import com.example.tributosV2.repository.ContribuienteRepository;
import com.example.tributosV2.repository.DebitoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

@SpringBootTest
public class ContribuienteServiceTest {

    @Mock
    private DebitoRepository debitoRepository;

    @Mock
    private ContribuienteRepository contribuienteRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private ContribuienteService contribuienteService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testSaveAll() {
        // Dado
        List<Contribuinte> contribuintes = new ArrayList<>();
        Contribuinte contribuinte1 = new Contribuinte();
        Contribuinte contribuinte2 = new Contribuinte();
        contribuintes.add(contribuinte1);
        contribuintes.add(contribuinte2);

        when(contribuienteRepository.saveAll(contribuintes)).thenReturn(contribuintes);

        // Quando
        List<Contribuinte> savedContribuintes = contribuienteService.saveAll(contribuintes);

        // Então
        assertEquals(contribuintes, savedContribuintes);
        verify(contribuienteRepository, times(1)).saveAll(contribuintes);
    }

    @Test
    public void testGetAll() {
        // Dado
        List<Contribuinte> expectedContribuintes = new ArrayList<>();
        expectedContribuintes.add(new Contribuinte());
        expectedContribuintes.add(new Contribuinte());

        when(contribuienteRepository.findAll()).thenReturn(expectedContribuintes);

        // Quando
        List<Contribuinte> contribuintes = contribuienteService.getAll();

        // Então
        assertEquals(expectedContribuintes, contribuintes);
        verify(contribuienteRepository, times(1)).findAll();
    }

    @Test
    public void testGetById() {
        // Dado
        Long id = 1L;
        Contribuinte expectedContribuinte = new Contribuinte();
        expectedContribuinte.setId(id);

        when(contribuienteRepository.findById(id)).thenReturn(Optional.of(expectedContribuinte));

        // Quando
        Contribuinte contribuinte = contribuienteService.getById(id);

        // Então
        assertEquals(expectedContribuinte, contribuinte);
        verify(contribuienteRepository, times(1)).findById(id);
    }

    @Test
    public void testUpdate() {
        // Dado
        Long id = 1L;
        Contribuinte existingContribuinte = new Contribuinte();
        existingContribuinte.setId(id);
        Contribuinte updatedContribuinte = new Contribuinte();
        updatedContribuinte.setId(id);

        when(contribuienteRepository.findById(id)).thenReturn(Optional.of(existingContribuinte));
        when(contribuienteRepository.save(any(Contribuinte.class))).thenReturn(updatedContribuinte);

        // Quando
        Contribuinte result = contribuienteService.update(id, updatedContribuinte);

        // Então
        assertEquals(updatedContribuinte, result);
        verify(contribuienteRepository, times(1)).findById(id);
        verify(contribuienteRepository, times(1)).save(updatedContribuinte);
    }

    @Test
    public void testDelete() {
        // Dado
        Long id = 1L;

        // Quando
        contribuienteService.delete(id);

        // Então
        verify(contribuienteRepository, times(1)).deleteById(id);
    }

    @Test
    public void testUpdate_WithNonExistingEntity() {
        // Dado
        Long id = 1L;
        Contribuinte updatedContribuinte = new Contribuinte();

        when(contribuienteRepository.findById(id)).thenReturn(Optional.empty());

        // Quando
        assertThrows(NotFoundException.class, () -> contribuienteService.update(id, updatedContribuinte));

        // Então
        verify(contribuienteRepository, times(1)).findById(id);
        verify(contribuienteRepository, never()).save(any(Contribuinte.class));
    }

    @Test
    public void testDelete_WithNonExistingEntity() {
        // Dado
        Long id = 1L;

        when(contribuienteRepository.findById(id)).thenReturn(Optional.empty());

        // Quando
        assertThrows(NotFoundException.class, () -> contribuienteService.delete(id));

        // Então
        verify(contribuienteRepository, times(1)).findById(id);
        verify(contribuienteRepository, never()).deleteById(id);
    }
}
