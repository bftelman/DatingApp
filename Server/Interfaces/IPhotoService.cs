using CloudinaryDotNet.Actions;

namespace Server.Interfaces
{
    public interface IPhotoService
    {
        Task<ImageUploadResult> AddPhotoAsync(IFormFile photo);
        Task<DeletionResult> DeletePhotoAsync(string publicid);
    }
}
