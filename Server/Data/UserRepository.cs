using Server.Entities;
using Server.Interfaces;
using Microsoft.EntityFrameworkCore;
using Server.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace Server.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext dataContext;
        private readonly IMapper mapper;

        public UserRepository(DataContext dataContext, IMapper mapper)
        {
            this.dataContext = dataContext;
            this.mapper = mapper;
        }
        public async Task<IEnumerable<AppUser>> GetAllAsync()
        {
            return await dataContext.Users.Include(p => p.Photos).ToListAsync();
        }

        public async Task<IEnumerable<MemberDto>> GetAllMembersAsync()
        {
            return await dataContext.Users
                .ProjectTo<MemberDto>(mapper.ConfigurationProvider)
                .ToListAsync();
        }

        public async Task<AppUser> GetByIdAsync(int id)
        {
            return await dataContext.Users.FindAsync(id);
        }

        public async Task<AppUser> GetByUserNameAsync(string username)
        {
            return await dataContext.Users.Include(p => p.Photos).SingleOrDefaultAsync(x => x.UserName == username);
        }

        public async Task<MemberDto> GetMemberByUserNameAsync(string username)
        {
            return await dataContext.Users
                .Where(x => x.UserName == username)
                .ProjectTo<MemberDto>(mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await dataContext.SaveChangesAsync() > 0;
        }

        public void Update(AppUser user)
        {
            dataContext.Entry(user).State = EntityState.Modified;
        }
    }
}
