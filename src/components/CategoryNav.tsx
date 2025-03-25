'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const CategoryNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        { name: 'BLOQUEO Y ETIQUETADO', href: '/categoria/bloqueo-etiquetado' },
        { name: 'CONTROL DE DERRAMES', href: '/categoria/control-derrames' },
        { name: 'EQUIPOS DE SEGURIDAD ELECTRICA', href: '/categoria/seguridad-electrica' },
        { name: 'ESCALERAS', href: '/categoria/escaleras' },
        { name: 'LINTERNAS', href: '/categoria/linternas' },
        { name: 'PROTECCION AUDITIVA', href: '/categoria/proteccion-auditiva' },
        { name: 'PROTECCION FACIAL', href: '/categoria/proteccion-facial' },
        { name: 'PROTECCION PARA CAIDAS', href: '/categoria/proteccion-caidas' },
        { name: 'PROTECCIÓN PARA LA CABEZA', href: '/categoria/proteccion-cabeza' },
        { name: 'PROTECCIÓN PARA MANOS', href: '/categoria/proteccion-manos' },
        { name: 'PROTECCION PARA PIES', href: '/categoria/proteccion-pies' },
        { name: 'PROTECCION RESPIRATORIA', href: '/categoria/proteccion-respiratoria' },
        { name: 'ROPA INDUSTRIAL', href: '/categoria/ropa-industrial' },
        { name: 'SEÑALIZACIÓN Y SEGURIDAD VIAL', href: '/categoria/senalizacion' },
    ];

    return (
        <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    {/* Botón de categorías */}
                    <div className="relative group">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-3 hover:bg-orange-600 transition-colors"
                        >
                            <FaBars className="text-xl" />
                            <span className="font-medium">Categorías</span>
                        </button>

                        {/* Menú desplegable de categorías */}
                        <div className={`absolute left-0 w-72 bg-white shadow-lg z-50 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                            {categories.map((category) => (
                                <Link
                                    key={category.href}
                                    href={category.href}
                                    className="flex px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors border-b border-gray-100"
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Enlaces principales */}
                    <nav className="hidden md:flex ml-8 space-x-8">
                        <Link href="/ofertas" className="text-gray-700 hover:text-orange-500 py-3 transition-colors">
                            Ofertas
                        </Link>
                        <Link href="/nuevos" className="text-gray-700 hover:text-orange-500 py-3 transition-colors">
                            Nuevos Productos
                        </Link>
                        <Link href="/mas-vendidos" className="text-gray-700 hover:text-orange-500 py-3 transition-colors">
                            Más Vendidos
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default CategoryNav; 