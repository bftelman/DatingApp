using Server.DTOs;
using Server.Entities;

namespace Server.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<AppUser>> GetAllAsync();
        Task<AppUser> GetByIdAsync(int id);
        Task<AppUser> GetByUserNameAsync(string username);
        Task<IEnumerable<MemberDto>> GetAllMembersAsync();
        Task<MemberDto> GetMemberByUserNameAsync(string username);
    }
}
