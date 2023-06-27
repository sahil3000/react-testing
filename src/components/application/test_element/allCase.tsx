export const AllCase = () => {
    return <div>
        <h1>Job Form</h1>
        <span title="sample-title">Sample Text</span>
        <p data-testid="sample-test-id">Sample Text</p>
        <img src="https://fastly.picsum.photos/id/122/200/300.jpg?hmac=OfQ8cObBgD7BOhMjqNrjqHDjO-rXiNQ4KvSd8QRAuIA" alt="sample-image" />
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Name" />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={() => {}} value="test@test.com" />
        </div>
    </div>
}