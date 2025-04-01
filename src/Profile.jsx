import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [showCollections, setShowCollections] = useState(false);
    const [showTags, setShowTags] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);

    // Profile data state
    const [profile, setProfile] = useState({
        username: '@theo_from_hsr',
        bio: '18 y/o with high ambitions, want to build cool stuff!',
        location: 'INDIAN',
        following: 2,
        liked: 32,
        saved: 23,
        files: 3
    });

    // Edit form state
    const [editForm, setEditForm] = useState({
        username: profile.username,
        bio: profile.bio,
        location: profile.location
    });

    // Sample data
    const [collections, setCollections] = useState([
        {
            id: 1,
            name: 'Web Projects',
            count: 12,
            image: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
            color: '#4285F4'
        },
        {
            id: 2,
            name: 'Mobile Apps',
            count: 5,
            image: 'https://cdn-icons-png.flaticon.com/512/2965/2965278.png',
            color: '#EA4335'
        },
        {
            id: 3,
            name: 'Design Inspo',
            count: 8,
            image: 'https://cdn-icons-png.flaticon.com/512/2779/2779775.png',
            color: '#FBBC05'
        },
        {
            id: 4,
            name: 'API Designs',
            count: 7,
            image: 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png',
            color: '#34A853'
        },
        {
            id: 5,
            name: 'Database',
            count: 9,
            image: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png',
            color: '#673AB7'
        },
        {
            id: 6,
            name: 'Cloud',
            count: 6,
            image: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',
            color: '#00BCD4'
        },
        {
            id: 7,
            name: 'DevOps',
            count: 4,
            image: 'https://cdn-icons-png.flaticon.com/512/3271/3271306.png',
            color: '#FF5722'
        },
        {
            id: 8,
            name: 'AI/ML',
            count: 5,
            image: 'https://cdn-icons-png.flaticon.com/512/2814/2814089.png',
            color: '#9C27B0'
        }
    ]);

    const [tags, setTags] = useState([
        { id: 1, name: 'React.js', active: true },
        { id: 2, name: 'Node.js', active: true },
        { id: 3, name: 'Python', active: false },
        { id: 4, name: 'UI/UX Design', active: false },
        { id: 5, name: 'Machine Learning', active: false },
        { id: 6, name: 'DevOps', active: false },
        { id: 7, name: 'Blockchain', active: false },
        { id: 8, name: 'Cloud Computing', active: false }
    ]);

    const toggleCollection = (id) => {
        setCollections(collections.map(collection =>
            collection.id === id ? { ...collection, active: !collection.active } : collection
        ));
    };

    const toggleTag = (id) => {
        setTags(tags.map(tag =>
            tag.id === id ? { ...tag, active: !tag.active } : tag
        ));
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const saveProfileChanges = () => {
        setProfile({
            ...profile,
            username: editForm.username,
            bio: editForm.bio,
            location: editForm.location
        });
        setShowEditProfile(false);
    };

    return (
        <div className={`profile-container ${darkMode ? 'dark-mode' : ''}`}>
            {/* Profile Header */}
            <div className="profile-header">
                <div className="profile-image-container">
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2820134%2Fpexels-photo-2820134.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-josh-hild-2820134.jpg%26fm%3Djpg&f=1&nofb=1&ipt=bb5d5f7e3c4c3c52a2136d217acabf53bec1d9db7a47840045f4151102388d81&ipo=images"
                        alt="Profile"
                        className="profile-image"
                    />
                </div>
                <div className="profile-info">
                    <h1>{profile.username}</h1>
                    <button
                        className="edit-btn"
                        onClick={() => {
                            setEditForm({
                                username: profile.username,
                                bio: profile.bio,
                                location: profile.location
                            });
                            setShowEditProfile(true);
                        }}
                    >
                        EDIT PROFILE
                    </button>
                </div>
            </div>

            {/* Bio Section */}
            <div className="bio-section">
                <p>{profile.location}</p>
                <p>{profile.bio}</p>
            </div>

            {/* Stats */}
            <div className="stats-row highlight">
                <div className="stat-item">
                    <span className="stat-number">{profile.following}</span>
                    <span className="stat-label">FOLLOWING</span>
                </div>
            </div>

            {/* Navigation */}
            <div className="nav-tabs">
                <div
                    className={`tab ${showCollections ? 'active' : ''}`}
                    onClick={() => {
                        setShowCollections(true);
                        setShowTags(false);
                    }}
                >
                    COLLECTIONS
                </div>
                <div
                    className={`tab ${showTags ? 'active' : ''}`}
                    onClick={() => {
                        setShowTags(true);
                        setShowCollections(false);
                    }}
                >
                    MANAGE TAGS
                </div>
            </div>

            {/* Content Area */}
            <div className="content-area">
                {showCollections && (
                    <div className="collections-container">
                        <h3>Your Collections</h3>
                        <div className="collections-grid">
                            {collections.map(collection => (
                                <div
                                    key={collection.id}
                                    className={`collection-square ${collection.active ? 'active' : ''}`}
                                    onClick={() => toggleCollection(collection.id)}
                                >
                                    <div
                                        className="collection-icon"
                                        style={{ backgroundColor: collection.color }}
                                    >
                                        <img src={collection.image} alt={collection.name} />
                                    </div>
                                    <div className="collection-details">
                                        <span className="collection-name">{collection.name}</span>
                                        <span className="collection-count">{collection.count} items</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {showTags && (
                    <div className="tags-container">
                        <h3>Your Tags</h3>
                        <div className="tags-list">
                            {tags.map(tag => (
                                <div
                                    key={tag.id}
                                    className={`tag-item ${tag.active ? 'active' : ''}`}
                                    onClick={() => toggleTag(tag.id)}
                                >
                                    {tag.name}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Stats Display */}
                <div className="stats-display">
                    <div className="stat-box">
                        <span className="stat-number">{profile.liked}</span>
                        <span className="stat-label">LIKED</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-number">{profile.saved}</span>
                        <span className="stat-label">SAVED</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-number">{profile.files}</span>
                        <span className="stat-label">FILES</span>
                    </div>
                </div>
            </div>

            {/* Edit Profile Modal */}
            {showEditProfile && (
                <div className="modal-overlay" onClick={() => setShowEditProfile(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Edit Profile</h2>
                            <button 
                                className="close-btn"
                                onClick={() => setShowEditProfile(false)}
                            >
                                ×
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={editForm.username}
                                    onChange={handleEditChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={editForm.location}
                                    onChange={handleEditChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Bio</label>
                                <textarea
                                    name="bio"
                                    value={editForm.bio}
                                    onChange={handleEditChange}
                                    rows="4"
                                />
                            </div>
                            <button 
                                className="save-btn"
                                onClick={saveProfileChanges}
                            >
                                SAVE CHANGES
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;