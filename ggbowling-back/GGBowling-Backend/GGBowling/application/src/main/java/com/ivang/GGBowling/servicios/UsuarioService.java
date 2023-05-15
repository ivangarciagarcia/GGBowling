package com.ivang.GGBowling.servicios;


import com.ivang.GGBowling.dto.usuario.NewUsuarioDTO;
import com.ivang.GGBowling.dto.usuario.UsuarioDTO;
import com.ivang.GGBowling.entity.UsuarioEntity;
import com.ivang.GGBowling.mapperDTO.UsuarioMapperDTO;
import com.ivang.GGBowling.repository.UsuarioRepository;
import com.ivang.GGBowling.service.UsuarioServiceInterface;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UsuarioService implements UsuarioServiceInterface {
  private final UsuarioRepository usuarioRepository;
  private final UsuarioMapperDTO usuarioMapperDTO;
  private final PasswordEncoder passwordEncoder;



  @Override
  public List<UsuarioDTO> findAll() {
    return usuarioMapperDTO.toUsuarioDTOList(usuarioRepository.findAll());
  }

  @Override
  public NewUsuarioDTO save(NewUsuarioDTO newUsuarioDTO) {

    // Encriptar la contraseña antes de guardarla
    String passwordEncriptada = passwordEncoder.encode(newUsuarioDTO.getPassword());
    newUsuarioDTO.setPassword(passwordEncriptada);

    return usuarioMapperDTO.toNewUsuarioDTO(
        usuarioRepository.save(
          usuarioMapperDTO.toNewUsuarioEntity(newUsuarioDTO)));
  }

  @Override
  public UsuarioDTO save2(UsuarioDTO usuarioDTO) {
    UsuarioEntity userToUpdate = usuarioRepository.getReferenceById(usuarioDTO.getUsuarioId());
    updateUser(userToUpdate, usuarioDTO);

    return usuarioMapperDTO.toUsuarioDTO(
            usuarioRepository.save(
              userToUpdate));
  }

  @Override
  public UsuarioDTO findByUsuarioId(Integer usuarioId) {
    return usuarioMapperDTO.toUsuarioDTO(usuarioRepository.getReferenceById(usuarioId));
  }

  @Override
  public UsuarioDTO findByEmail(String email) {
    return usuarioMapperDTO.toUsuarioDTO(usuarioRepository.findByEmail(email));
  }

  @Override
  public void deleteUsuario(Integer usuarioId) {
    usuarioRepository.deleteById(usuarioId);
  }


  private void updateUser(UsuarioEntity usuarioExistente, UsuarioDTO usuarioActualizado){
    if(usuarioActualizado.getUsername() != null) {
      usuarioExistente.setUsername(usuarioActualizado.getUsername());
    }
    if(usuarioActualizado.getPassword() != null) {
      usuarioExistente.setPassword(usuarioActualizado.getPassword());
    }
    if(usuarioActualizado.getNombre() != null) {
      usuarioExistente.setNombre(usuarioActualizado.getNombre());
    }
    if(usuarioActualizado.getPrimerApellido() != null) {
      usuarioExistente.setPrimerApellido(usuarioActualizado.getPrimerApellido());
    }
    if(usuarioActualizado.getSegundoApellido() != null) {
      usuarioExistente.setSegundoApellido(usuarioActualizado.getSegundoApellido());
    }
    if(usuarioActualizado.getEmail() != null) {
      usuarioExistente.setEmail(usuarioActualizado.getEmail());
    }
    if(usuarioActualizado.getTelefono() != null) {
      usuarioExistente.setTelefono(usuarioActualizado.getTelefono());
    }
    if(usuarioActualizado.getFechaNacimiento() != null) {
      usuarioExistente.setFechaNacimiento(usuarioActualizado.getFechaNacimiento());
    }
  }

}



