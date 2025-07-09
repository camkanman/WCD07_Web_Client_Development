import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturedProjects from '../FeaturedProjects';

describe('FeaturedProjects Component', () => {
  // Tes 1: Memastikan komponen dirender dengan benar
  test('renders the component with initial projects', () => {
    render(<FeaturedProjects />);

    // Cek apakah judul utama ada
    expect(screen.getByText('FEATURED PROJECTS')).toBeInTheDocument();

    // Cek apakah kedua proyek awal ditampilkan (berdasarkan judulnya)
    expect(screen.getByText('Pokémon Web Explorer')).toBeInTheDocument();
    expect(screen.getByText('Simple Landing Page with Routing')).toBeInTheDocument();
  });

  // Tes 2: Memastikan fungsionalitas pencarian bekerja
  test('filters projects based on search input', () => {
    render(<FeaturedProjects />);

    // Dapatkan input pencarian
    const searchInput = screen.getByPlaceholderText('Search projects by title...');

    // Skenario 1: Cari proyek 'Pokémon'
    fireEvent.change(searchInput, { target: { value: 'Pokémon' } });

    // Harusnya hanya proyek Pokémon yang muncul
    expect(screen.getByText('Pokémon Web Explorer')).toBeInTheDocument();
    expect(screen.queryByText('Simple Landing Page with Routing')).not.toBeInTheDocument();

    // Skenario 2: Cari proyek yang tidak ada
    fireEvent.change(searchInput, { target: { value: 'NonExistentProject' } });

    // Harusnya pesan 'No projects found' yang muncul
    expect(screen.getByText('No projects found matching your search.')).toBeInTheDocument();
    expect(screen.queryByText('Pokémon Web Explorer')).not.toBeInTheDocument();

    // Skenario 3: Hapus input pencarian
    fireEvent.change(searchInput, { target: { value: '' } });

    // Harusnya semua proyek muncul kembali
    expect(screen.getByText('Pokémon Web Explorer')).toBeInTheDocument();
    expect(screen.getByText('Simple Landing Page with Routing')).toBeInTheDocument();
  });
});
