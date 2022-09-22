namespace LoymarkAPI.Utilities
{
    using AutoMapper;
    using LoymarkAPI.DTOs;
    using LoymarkAPI.Models;

    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<UsuarioDTO, UsuarioModel>();
        }
    }
}
